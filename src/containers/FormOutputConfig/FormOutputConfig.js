import React, { useState } from 'react'

import classes from './FormOutputConfig.module.css'

import ProductsComponent from '../../components/ProductsComponent/ProductsComponent'
import InputSearch from '../../components/InputSearch/InputSearch'

import { useActions } from '../../hooks/useActions'

import { useSelector } from 'react-redux'

// const minCharLength = 2
const FormOutputConfig = () => {
   // let [inputValue, setInputValue] = useState('')
   // let [isSearchOn, setIsSearchOn] = useState(false)
   // let [errorMsg, setErrorMsg] = useState(null)

   const { postProducts } = useActions()
   const { productsDataState } = useSelector(state => state)
   // console.log('PRODUCTS LIST: ', productsDataState)
   const removeProductHandler = id => {
      const productsList =
         productsDataState.filter(product =>
            product.id !== id
         )

      postProducts(productsList, 'remove')
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
         postProducts(productsList, 'updQtde')
      } else {
         const remove = window.confirm('Quantidade deve ser maior que 0. \nO produto será excluído!')

         if (remove === true) removeProductHandler(id)
      }
   }


   return (
      <div className={classes.FormOutput_container}>
         <div>
            <h2>Lista De Produtos</h2>
         </div>
         <InputSearch />
         <ProductsComponent
            removeProduct={(id) => removeProductHandler(id)}
            updateProduct={(arg, id) => updateQtdeHandler(arg, id)}
         />
      </div>
   )
}


export default FormOutputConfig