import { useActions } from "./useActions"
import useUpdateSearch from 'hooks/useUpdateSearch'

import productsSeed from 'data/products_seed'
import { orderList } from "helpers/functions"
import { postProductsService, getProductsService, setListOrderService } from 'services/requests'
import { InitialState, ProductsList, ProductKeys } from 'common/types'

import { useSelector } from 'react-redux'


const useInitProducts = () => {
   const { updateProducts, setToastify } = useActions()  
   const { updateSearch } = useUpdateSearch()
    
   const isSearchOn = useSelector((state: InitialState) => state.isSearchOn)   

   let productsData: ProductsList[] = []
   let productsListVar: ProductsList[] | null = null 
   let list_orderingVar: [string, ProductKeys] 
   let unordered_listVar: boolean | null = null 
   let errorVar: boolean | null = null

   const initProducts = (action: string, products?: ProductsList[]) => {
      if (action === 'load') {
         const { 
            productsList_storage, 
            list_ordering, 
            unordered_list, 
            error 
         } = getProductsService()

         productsListVar = productsList_storage
         list_orderingVar = list_ordering
         unordered_listVar = unordered_list
         errorVar = error
         
         if (list_orderingVar !== null) {
            productsData = orderList(productsData, list_orderingVar[1], list_orderingVar[0], unordered_listVar)
         } 
         
         if (productsListVar === null) {
            setListOrderService(['down', 'id'], true)
            updateProducts(productsSeed, ['down', 'id'])
            const { errorMsg } = postProductsService(productsSeed)
            errorVar && setToastify(errorMsg)
         } else {
            updateProducts(productsListVar, list_orderingVar)
         }
      }

      if (action !== 'load') {
         productsData = products!
         list_orderingVar = JSON.parse(localStorage.getItem('list_ordering') || 'null')

         updateProducts(productsData, list_orderingVar)
         isSearchOn && updateSearch()
         const { errorMsg } = postProductsService(productsData, origin)
         if(action === 'remove' || action === 'add') setToastify(errorMsg)
      }
   }

   return { initProducts }
}

export default useInitProducts