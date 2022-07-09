import React, { useState } from 'react'

import classes from './FormOutputConfig.module.css'

import ProductsComponent from '../../components/ProductsComponent/ProductsComponent'
import * as productActions from '../../store/actions/index'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from 'react-redux'


const FormOutputConfig = () => {
   let [inputValue, setInputValue] = useState('')
   let [isSearchOn, setIsSearchOn] = useState(false)
   let [errorMsg, setErrorMsg] = useState(null)
   let [minCharLength, setMinChartLength] = useState(2)

   const dispatch = useDispatch()
   const { listOrder, productsDataState } = useSelector(state => state)

   const removeProductHandler = id => {
      const productsList =
         productsDataState.filter(product =>
            product.id !== id
         )

      dispatch(productActions.postProducts(productsList, 'remove'))
   }

   const updateQtdeHandler = (arg, id) => {

      let productsList = productsDataState.map(product => {
         return { ...product }
      })

      let qtde = null

      productsList.forEach((product, i) => {
         if (product.id === id) {
            if (arg === 'up') {
               productsList[i].qtde = product.qtde + 1
               productsList[i].valorTotal = product.qtde * product.valor
            }

            if (arg === 'down') {
               productsList[i].qtde = product.qtde - 1
               productsList[i].valorTotal = product.qtde * product.valor
            }

            qtde = productsList[i].qtde
         }
      })

      if (qtde > 0) {
         dispatch(productActions.postProducts(productsList, 'updQtde'))
      } else {
         const remove = window.confirm('Quantidade deve ser maior que 0. \nO produto será excluído!')

         if (remove === true) removeProductHandler(id)
      }
   }

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

      setInputValue(inputValue)
      setIsSearchOn(isSearchOn)
      setErrorMsg(errorMsg)
   }

   return (
      <div className={classes.FormOutput_container}>
         <div>
            <h2>Lista De Produtos</h2>
         </div>
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
         <ProductsComponent
            products={productsDataState}
            productsOrder={listOrder}
            removeProduct={(id) => removeProductHandler(id)}
            updateProduct={(arg, id) => updateQtdeHandler(arg, id)}
            searchValue={inputValue}
            searchOn={isSearchOn}
         />
      </div>
   )
}


export default FormOutputConfig