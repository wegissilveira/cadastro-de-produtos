import { useActions } from "./useActions"
import { orderList } from "helpers/functions"
import { setListOrderService, postProductsService } from 'services/requests'

import { useSelector } from 'react-redux'


const useSetOrder = () => {   
   console.log('7- useSetOrder');
   const { 
      updateProducts, 
      setToastify, 
      setSearch 
   } = useActions()

   const { 
      productsDataState, 
      searchProducts, 
      isSearchOn,
      inputValue
   } = useSelector(state => state)

   const setOrder = (order, ul, products) => {
      console.log('7.1- useSetOrder FN');
      const { error, errorMsg } = setListOrderService(order, ul)
      const productsData = !products ? orderList(productsDataState, order[1], order[0], ul) : products
      
      if (isSearchOn) {
         console.log('7.2- isSearchOn')
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