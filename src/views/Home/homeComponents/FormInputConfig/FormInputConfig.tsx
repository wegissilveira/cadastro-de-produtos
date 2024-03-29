import React, { useState, useEffect } from 'react'
import classes from './FormInputConfig.module.scss'

import Input from 'views/Home/homeComponents/Input/Input'
import useInitProducts from 'hooks/useInitProducts'
import { InitialState, ProductsList, ProductForm, Validation } from 'common/types'
import { outputForm } from 'helpers/outputForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'


const FormInputConfig = () => {
   const [formIsValidState, setFormIsValidState] = useState(false)
   const [productForm, setProductForm] = useState<ProductForm[]>(outputForm)
 
   const productsDataState = useSelector((state: InitialState) => state.productsDataState)
   const { initProducts } = useInitProducts()
   
   const addIdHandler = (products: ProductsList[]) => {
      const ids: number[] = []
      products.forEach(product => {
         ids.push(product.id!)
      })

      const currentIds = ids.reduce((sparse: number[], i) => (sparse[i] = 1, sparse), [])
      const missingIds = [...currentIds.keys()].filter(i => i && !currentIds[i])

      let new_id
      if (missingIds.length > 0) {
         new_id = Math.min(...missingIds)
      } else {
         new_id = ids.length === 0 ? 1 : Math.max(...ids) + 1
      }

      return new_id
   }

   const checkFormValidityHandler = (value: string | number, rules: Validation) => {
      let isValid = false
      if (rules.required) {
         isValid = value.toString().trim() !== '' && value !== 0
      }

      return isValid
   }

   const inputChangeHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>, i: number) => {
      const updatedProduct = [...productForm]
      const updatedProductField = { ...updatedProduct[i] }
  
      let value = e.target.value
      let name = e.target.name

      if (name === 'nome') {
         value = value.replace(/^\s/, "")
      }

      if (name === 'qtde' || name === 'valor') {
         value = value.replace(/^0|[^\d.]|\.(?=.*\.)/g, "")
      }

      updatedProductField.config.value = value
      updatedProductField.config.valid = checkFormValidityHandler(updatedProductField.config.value, updatedProductField.config.validation!)
      updatedProductField.config.touched = true

      updatedProduct[i] = updatedProductField
      updatedProduct[4].config.value = Number(updatedProduct[2].config.value) * Number(updatedProduct[3].config.value)

      let formIsValid = true
      updatedProduct.forEach(item => {
         formIsValid = item.config.valid && formIsValid
      })
      
      setProductForm(updatedProduct)
      setFormIsValidState(formIsValid)
   }, [productForm])

   const submitProductHandler = (products: ProductsList[]) => {
      cleanForm()
      initProducts('add', products)
   }

   const formatFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const productFormLocal = [...productForm]

      productFormLocal[2].config.value = Number(productFormLocal[2].config.value)
      productFormLocal[3].config.value = Number(productFormLocal[3].config.value)

      const productsList = productsDataState
      productFormLocal[0].config.value = addIdHandler(productsList)

      const productValues = productFormLocal.reduce<Record<string, any>>((obj, item) => (
         obj[item.field] = item.config.value, obj
      ), {})

      productsList.push(productValues)
      submitProductHandler(productsList)
      setFormIsValidState(false)
   }

   const cleanForm = () => {
      const productFormLocal = [...productForm]

      productFormLocal.forEach((item, i) => {
         item.config.value = ''
         if (i > 0 && i < 4) item.config.valid = false
         if (i > 0 && i < 4) item.config.touched = false
      })
      
      setProductForm(productFormLocal)
   }

   // useEffect(() => {
   //    initProducts('load')
   // }, [])


   return (
      <div className={classes.Insert_product_subContainer}>
         <div>
            <h2>Registre Um Novo Produto</h2>
         </div>
         <form
            onSubmit={formatFormHandler}
            className={classes.Insert_product_form}
         >
            <Input
               productForm={productForm}
               changed={(e: React.ChangeEvent<HTMLInputElement>, i: number) => inputChangeHandler(e, i)}
            />
            <button disabled={!formIsValidState}>
               <p>Inserir Produto</p>
               <FontAwesomeIcon icon="chevron-circle-right" />
            </button>

         </form>
      </div>
   )
}

export default FormInputConfig