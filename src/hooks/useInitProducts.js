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
   // const { listOrder, isSearchOn } = useSelector(state => state)   
   const isSearchOn = useSelector(state => state.isSearchOn)   
   // const listOrder = useSelector(state => state.listOrder)

   let productsData = []
   let productsListVar = null 
   let list_orderingVar = null 
   let unordered_listVar = null 
   let errorVar = null

   const initProducts = (action, products) => {
      // CRIA A LISTA NO EVENTO DE LOAD
      // SE HOUVER UMA LISTA ELA É RENDERIZADA
      // CASO CONTRÁRIO É UTILIZADA A SEED
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

      // CRIA A LISTA EM TODOS OS EVENTOS DIFERENTES DE LOAD
      // AUMENTAR QUANTIDADE, ADICIONAR ITEM, REMOVER ITEM
      if (action !== 'load') {
         productsData = products

         updateProducts(productsData, list_orderingVar)
         isSearchOn && updateSearch()
         const { errorMsg } = postProductsService(productsData, origin)
         if (action === 'remove' || action === 'add') setToastify(errorMsg)
      }
   }

   return { initProducts }
}

export default useInitProducts