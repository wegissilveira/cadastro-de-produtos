import { useEffect } from "react"

import { useActions } from "./useActions"
import useInitProducts from 'hooks/useInitProducts'

let errorMsg = ['', '']
const useSetOrder = () => {
   // console.log('USE SET ORDER 1')
   
   const { postProducts, initProducts } = useActions()
   // const { postProducts } = useActions()
   // console.log('USE SET ORDER 1.1')
   // console.log('**********')
   // const { initProducts } = useInitProducts()
   // console.log('USE SET ORDER 2')

   const setOrder = (order, ul, products) => {
      try {
         localStorage.setItem('list_ordering', JSON.stringify(order))
         localStorage.setItem('unordered_list', JSON.stringify(ul))
      } catch (e) {
         errorMsg = ['red', 'Algo saiu errado!', 'Atualize a página e tente novamente.']
      }

      // ul !== true ?
      //    initProducts('updOrder') :
      //    postProducts(products, 'updOrder')
      if (ul !== true) {
         console.log('INIT')
         initProducts('updOrder')
      } else {
         console.log('POST')
         postProducts(products, 'updOrder')
      }
   }

   // useEffect(() => {
   //    setOrder()
   // }, [])

   return { setOrder }
}

export default useSetOrder