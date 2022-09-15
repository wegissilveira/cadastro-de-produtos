import { useEffect } from 'react'

import { useActions } from 'hooks/useActions'
import { useSelector } from 'react-redux'
import { InitialState, ProductsList } from 'common/types'


const useUpdateSearch = () => {
   const { setSearch } = useActions()

   const productsDataState = useSelector((state: InitialState) => state.productsDataState)
   const isSearchOn = useSelector((state: InitialState) => state.isSearchOn)   
   const inputValue = useSelector((state: InitialState) => state.inputValue) 
   
   const updateSearch = (inputValueArg = inputValue, isSearchOnArg = isSearchOn) => {  
      const data = !productsDataState ? [] : productsDataState
      if (isSearchOnArg) {
         const products: ProductsList[] = []
         const searchKey = new RegExp(inputValueArg, 'gi')        
         data.forEach(item => {
            if (isSearchOnArg) {
               if (item.nome!.match(searchKey)) {
                  products.push(item)
               } 
            } 
         })
         if (products.length === 0 && isSearchOnArg) products.push({isEmpty: true})
         setSearch(products, isSearchOnArg, inputValueArg)
      } else {
         setSearch(data, false)
      }
   }

   useEffect(() => {
      updateSearch()
   }, [productsDataState])
   
   return { updateSearch }

}

export default useUpdateSearch