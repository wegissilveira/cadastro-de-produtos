import React, { useState } from 'react'

import classes from './InputSearch.module.scss'

import useUpdateSearch from 'hooks/useUpdateSearch'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const minCharLength = 3

const InputSearch = () => {
   const [errorMsg, setErrorMsg] = useState<string | null>(null)

   const { updateSearch } = useUpdateSearch()

   const searchProductHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue: string = (e.currentTarget.parentNode!.childNodes[1] as HTMLInputElement).value

      let isSearchOn
      let errorMsg
      if (inputValue !== '') {
         if (inputValue.length >= minCharLength) {
            isSearchOn = true
            errorMsg = null
         } else {
            isSearchOn = false
            errorMsg = '*Insira ao menos 3 caracteres para iniciar a busca'
         }

      } else {
         isSearchOn = false
         errorMsg = null
      }

      updateSearch(inputValue, isSearchOn)
      setErrorMsg(errorMsg)
   }


   return (
      <div className={classes.Search_container}>
         <div>
            <FontAwesomeIcon
               icon="search"
               color="rgb(126, 125, 125)"
               aria-label="search-icon"
            />
            <input
               placeholder="Busca por produtos"
               onChange={searchProductHandler}
            />
         </div>
         <span>{errorMsg}</span>
      </div>
   )
}

export default InputSearch