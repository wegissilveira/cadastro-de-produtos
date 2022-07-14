import { useEffect } from "react"

import { useActions } from "./useActions"

import productsSeed from 'data/products_seed'
import { orderList } from "common/functions"

import { actionCreators } from '../store'

let errorMsg = ['', '']
const useInitProducts = () => {
   const { setOrder, getProducts, setToastify } = useActions()

   const initProducts = origin => {
      let productsData = []

      let productsList_storage
      let list_ordering
      let unordered_list
      let error = false

      try {
         productsList_storage = JSON.parse(localStorage.getItem('products_list'))
         list_ordering = JSON.parse(localStorage.getItem('list_ordering'))
         unordered_list = JSON.parse(localStorage.getItem('unordered_list'))
      } catch (e) {
         productsList_storage = null
         list_ordering = null
         error = true

         if (errorMsg[1] === '') {
            errorMsg = ['red', 'Algo saiu errado!', 'Os produtos não foram carregados.']
         }
      }

      if (productsList_storage !== null) {
         productsData = productsList_storage
      }

      if (list_ordering !== null && origin !== 'updQtde') {
         productsData = orderList(productsData, list_ordering[1], list_ordering[0], unordered_list)
      }


      if (origin !== 'updQtde' && origin !== 'updOrder') {
         if (origin !== 'load' || error === true) {
            setToastify(errorMsg)
         }
      }

      if (list_ordering === null && productsList_storage === null) {
         setOrder(['down', 'id'], true, productsSeed)
      } else {
         getProducts(productsData, list_ordering)
      }
   }

   useEffect(() => {
      initProducts()
   }, [])

   return { initProducts }
}

export default useInitProducts