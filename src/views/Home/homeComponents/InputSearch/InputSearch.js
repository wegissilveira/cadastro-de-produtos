import React, { useState } from 'react'

import classes from './InputSearch.module.css'

import useUpdateSearch from 'hooks/useUpdateSearch'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const minCharLength = 2
let timer
const waitTime = 1000
const InputSearch = () => {
   let [errorMsg, setErrorMsg] = useState(null)

   const { updateSearch } = useUpdateSearch()

   const searchProductHandler = e => {
      let inputValue = e.currentTarget.parentNode.childNodes[1].value
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

      clearTimeout(timer)

      timer = setTimeout(() => {
         updateSearch(inputValue, isSearchOn)
     }, waitTime)
      setErrorMsg(errorMsg)
   }


   return (
      <div className={classes.Search_container}>
         <div>
            <FontAwesomeIcon
               icon="search"
               color="rgb(126, 125, 125)"
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