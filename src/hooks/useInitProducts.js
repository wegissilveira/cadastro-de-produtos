import { useEffect } from "react"

import { useActions } from "./useActions"

const useInitProducts = () => {
   const { initProducts: initProductsFn } = useActions()

   const initProducts = (order) => {
      initProductsFn(order)
   }

   useEffect(() => {
      initProducts()
   }, [])

   return { initProducts }
}

export default useInitProducts