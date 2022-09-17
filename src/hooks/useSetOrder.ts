import { useActions } from "./useActions"
import { orderList } from "helpers/functions"
import { setListOrderService, postProductsService } from 'services/requests'

import { InitialState, ProductsList, ProductKeys } from 'common/types'

import { useSelector } from 'react-redux'


const useSetOrder = () => {   
   const { 
      updateProducts, 
      setToastify, 
      setSearch 
   } = useActions()

   const productsDataState = useSelector((state: InitialState) => state.productsDataState)
   const searchProducts = useSelector((state: InitialState) => state.searchProducts)
   const isSearchOn = useSelector((state: InitialState) => state.isSearchOn)
   const inputValue = useSelector((state: InitialState) => state.inputValue)
   
   const setOrder = (order: [string, ProductKeys], ul: boolean, products?: ProductsList[]) => {
      const { error, errorMsg } = setListOrderService(order, ul)
      const productsData: ProductsList[] = !products ? orderList(productsDataState, order[1], order[0], ul) : products
      
      if (isSearchOn) {
         const searchOrder: ProductsList[] = orderList(searchProducts, order[1], order[0], ul)
         setSearch(searchOrder, isSearchOn, inputValue)
      }

      postProductsService(productsData)
      updateProducts(productsData, order)
      if (error === true) setToastify(errorMsg)
   }

   return { setOrder }
}

export default useSetOrder