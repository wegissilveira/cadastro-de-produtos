import { useEffect } from 'react'

import { useActions } from 'hooks/useActions'
import { useSelector } from 'react-redux'

const useUpdateSearch = () => {
   const { setSearch } = useActions()
   const { productsDataState, inputValue, isSearchOn } = useSelector(state => state)

   const updateSearch = (inputValueArg = inputValue, isSearchOnArg = isSearchOn) => {  
      const products = []
      const searchKey = new RegExp(inputValueArg, 'gi')
      productsDataState.forEach(item => {
         if (isSearchOnArg) {
            if (item.nome.match(searchKey)) {
               products.push(item)
            } 
         } 
      })
      if (products.length === 0 && isSearchOnArg) products.push('empty search')
      setSearch(products, isSearchOnArg, inputValueArg)
   }

   useEffect(() => {
      updateSearch()
   }, [productsDataState])
   
   return { updateSearch }

}

export default useUpdateSearch