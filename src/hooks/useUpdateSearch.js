import { useEffect } from 'react'

import { useActions } from 'hooks/useActions'
import { useSelector } from 'react-redux'

const useUpdateSearch = () => {
   console.log('4- useUpdateSearch');
   const { setSearch } = useActions()
   // const { productsDataState, inputValue, isSearchOn } = useSelector(state => state.isSearchOn && state)

   const productsDataState = useSelector(state => state.productsDataState)   
   const isSearchOn = useSelector(state => state.isSearchOn)   
   const inputValue = useSelector(state => state.inputValue) 

   const updateSearch = (inputValueArg = inputValue, isSearchOnArg = isSearchOn) => {  
      const data = !productsDataState ? [] : productsDataState
      if (isSearchOnArg) {
         const products = []
         const searchKey = new RegExp(inputValueArg, 'gi')        
         data.forEach(item => {
            if (isSearchOnArg) {
               if (item.nome.match(searchKey)) {
                  products.push(item)
               } 
            } 
         })
         if (products.length === 0 && isSearchOnArg) products.push('empty search')
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