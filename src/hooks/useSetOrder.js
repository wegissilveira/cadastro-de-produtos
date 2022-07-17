import { useActions } from "./useActions"
import { orderList } from "helpers/functions"
import { setListOrderService, postProductsService } from 'services/requests'

import { useSelector } from 'react-redux'


const useSetOrder = () => {   
   const { updateProducts, setToastify } = useActions()
   const { productsDataState } = useSelector(state => state)

   const setOrder = (order, ul, products) => {
      const { error, errorMsg } = setListOrderService(order, ul)
      const productsData = !products ? orderList(productsDataState, order[1], order[0], ul) : products
      postProductsService(productsData)
      updateProducts(productsData, order)
      if (error === true) setToastify(errorMsg)
   }

   return { setOrder }
}

export default useSetOrder