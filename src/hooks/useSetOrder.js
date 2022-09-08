import { useActions } from "./useActions"
import { orderList } from "helpers/functions"
import { setListOrderService, postProductsService } from 'services/requests'

import { useSelector } from 'react-redux'


const useSetOrder = () => {   
   const { 
      updateProducts, 
      setToastify, 
      setSearch 
   } = useActions()

   const productsDataState = useSelector(state => state.productsDataState)
   const searchProducts = useSelector(state => state.searchProducts)
   const isSearchOn = useSelector(state => state.isSearchOn)
   const inputValue = useSelector(state => state.inputValue)

   const setOrder = (order, ul, products) => {
      const { error, errorMsg } = setListOrderService(order, ul)
      const productsData = !products ? orderList(productsDataState, order[1], order[0], ul) : products
      
      if (isSearchOn) {
         const searchOrder = orderList(searchProducts, order[1], order[0], ul)
         setSearch(searchOrder, isSearchOn, inputValue)
      }

      postProductsService(productsData)
      updateProducts(productsData, order)
      if (error === true) setToastify(errorMsg)
   }

   return { setOrder }
}

export default useSetOrder