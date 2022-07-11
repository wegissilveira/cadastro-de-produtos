import React, { useState } from 'react'

import classes from './InputSearch.module.css'

import { useActions } from '../../hooks/useActions'

import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const minCharLength = 2
let timer
const waitTime = 1000
const InputSearch = () => {
   let [errorMsg, setErrorMsg] = useState(null)

   const { setSearch } = useActions()
   const { productsDataState } = useSelector(state => state)

   const searchProductHandler = e => {
      let inputValue = e.currentTarget.parentNode.childNodes[1].value
      let isSearchOn
      let errorMsg

      if (inputValue !== '') {
         if (inputValue.length >= minCharLength) {
            isSearchOn = true
            errorMsg = null
         } else {
            inputValue = ''
            isSearchOn = false
            errorMsg = '*Insira ao menos 3 caracteres para iniciar a busca'
         }

      } else {
         isSearchOn = false
         errorMsg = null
      }

      clearTimeout(timer)

      timer = setTimeout(() => {
         updateProductsSearch(inputValue, isSearchOn)
     }, waitTime)
      setErrorMsg(errorMsg)
   }

   
   const updateProductsSearch = (inputValue, isSearchOn) => {
      let products = []
      productsDataState.forEach(item => {
         const searchKey = new RegExp(inputValue, 'gi')
   
         if (isSearchOn) {
            if (item.nome.match(searchKey)) {
               products.push(item)
            } 
            
         } else {
            products.push(item)
         }
      })
      if (products.length === 0) products.push('empty search')
      setSearch(products)
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