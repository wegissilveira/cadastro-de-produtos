import { useActions } from "./useActions"
import useUpdateSearch from 'hooks/useUpdateSearch'

import productsSeed from 'data/products_seed'
import { orderList } from "helpers/functions"
import { postProductsService, getProductsService, setListOrderService } from 'services/requests'

import { useSelector } from 'react-redux'


const useInitProducts = () => {
   console.log('8- useInitProducts');
   const { updateProducts, setToastify } = useActions()  
   const { updateSearch } = useUpdateSearch()
   const { listOrder, isSearchOn } = useSelector(state => state)   

   let productsData = []
   let productsListVar = null 
   let list_orderingVar = null 
   let unordered_listVar = null 
   let errorVar = null

   const initProducts = (origin, products) => {
      if (origin === 'load') {
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
      }
      
      if (productsListVar !== null) {
         productsData = productsListVar
      }

      if (origin !== 'load') {
         productsData = products
         list_orderingVar = listOrder
      }

      if (productsListVar === null && origin === 'load') {
         setListOrderService(['down', 'id'], true)
         updateProducts(productsSeed, ['down', 'id'])
         const { errorMsg } = postProductsService(productsSeed)
         if (errorVar === true) setToastify(errorMsg)

      } else {
         updateProducts(productsData, list_orderingVar)
         if (isSearchOn) updateSearch()
         const { errorMsg } = postProductsService(productsData, origin)
         if (origin === 'remove' || origin === 'add') setToastify(errorMsg)
      }
   }

   return { initProducts }
}

export default useInitProducts