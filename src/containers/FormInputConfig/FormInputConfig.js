import React, { useState, useEffect } from 'react'

import classes from './FormInputConfig.module.css'

import Input from '../../components/UI/Input/Input'
import * as productActions from '../../store/actions/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'


const FormInputConfig = (props) => {
   let [productFormState, setProductFormState] = useState({
      id: {
         elementType: false,
         value: '',
         validation: {},
         valid: true,
         touched: false
      },
      nome: {
         elementType: 'input',
         elementConfig: {
            type: 'text',
            placeholder: 'Nome do Produto',
            name: 'nome',
         },
         label: 'Nome do Produto',
         value: '',
         validation: {
            required: true,
         },
         valid: false,
         touched: false
      },
      qtde: {
         elementType: 'input',
         elementConfig: {
            type: 'text',
            placeholder: 'Quantidade',
            name: 'qtde',
         },
         label: 'Quantidade',
         value: '',
         validation: {
            required: true,
         },
         valid: false,
         touched: false
      },
      valor: {
         elementType: 'input',
         elementConfig: {
            type: 'text',
            placeholder: 'Valor Unitário',
            name: 'valor',
         },
         label: 'Valor Unitário',
         value: '',
         validation: {
            required: true,
         },
         valid: false,
         touched: false
      },
      valorTotal: {
         elementType: false,
         value: 0,
         validation: {},
         valid: true,
         touched: false
      }
   })
   let [formIsValidState, setFormIsValidState] = useState(false)

   const dispatch = useDispatch()
   const { productsDataState } = useSelector(state => state)

   const addIdHandler = products => {
      console.log('PRODUCTS: ', products)
      const ids = []
      products.forEach(product => {
         ids.push(product.id)
      })

      const sparse = ids.reduce((sparse, i) => (sparse[i] = 1, sparse), [])
      const x = [...sparse.keys()].filter(i => i && !sparse[i])

      let new_id
      if (x.length > 0) {
         new_id = Math.min(...x)
      } else {
         new_id = ids.length === 0 ? 1 : Math.max(...ids) + 1
      }

      return new_id
   }

   const checkFormValidityHandler = (value, rules) => {
      let isValid = false

      if (rules.required) {
         isValid = value.toString().trim() !== '' && value !== 0
      }

      return isValid
   }

   const inputChangeHandler = (e, field) => {
      let updatedProduct = { ...productFormState }
      let updatedProductField = { ...updatedProduct[field] }

      let value = e.target.value
      let name = e.target.name

      if (name === 'nome') {
         value = value.replace(/^\s/, "")
      }

      if (name === 'qtde' || name === 'valor') {
         value = value.replace(/^0|[^\d.]|\.(?=.*\.)/g, "")
      }

      updatedProductField.value = value
      updatedProductField.valid = checkFormValidityHandler(updatedProductField.value, updatedProductField.validation)
      updatedProductField.touched = true

      updatedProduct[field] = updatedProductField
      updatedProduct.valorTotal.value = updatedProduct.qtde.value * updatedProduct.valor.value

      let formIsValid = true
      for (let field in updatedProduct) {
         formIsValid = updatedProduct[field].valid && formIsValid
      }

      setProductFormState(updatedProduct)
      setFormIsValidState(formIsValid)
   }

   const submitProductHandler = product => {
      dispatch(productActions.postProducts(product))
      cleanForm()
   }

   const formatFormHandler = e => {
      e.preventDefault()

      productFormState.qtde.value = Number(productFormState.qtde.value)
      productFormState.valor.value = Number(productFormState.valor.value)

      const productsList = productsDataState
      productFormState.id.value = addIdHandler(productsList)

      const productValues = {}
      for (let key in productFormState) {
         productValues[key] = productFormState[key].value
      }

      productsList.push(productValues)

      submitProductHandler(productsList)
      setFormIsValidState(false)
   }

   const cleanForm = () => {
      let productForm = { ...productFormState }

      for (let key in productForm) {
         productForm[key].value = ''
      }

      setProductFormState(productForm)
   }

   const productForm = []
   for (let key in productFormState) {
      productForm.push({
         field: key,
         config: productFormState[key]
      })
   }

   useEffect(() => {
      dispatch(productActions.initProducts('load'))
   }, [])


   return (
      <div className={classes.Insert_product_subContainer}>
         <div>
            <h2>Registre Um Novo Produto</h2>
         </div>
         <form
            onSubmit={formatFormHandler}
            className={classes.Insert_product_form}
         >
            <div>
               {productForm.map(el => {
                  let input
                  if (el.config.elementType !== false) {
                     input = <Input
                        key={el.field}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        value={el.config.value}
                        invalid={!el.config.valid}
                        touched={el.config.touched}
                        label={el.config.label}
                        changed={e => inputChangeHandler(e, el.field)}
                     />
                  }
                  return input
               })}
            </div>

            <button disabled={!formIsValidState}>
               <p>Inserir Produto</p>
               <FontAwesomeIcon
                  icon="chevron-circle-right"
               />
            </button>

         </form>
      </div>
   )
}

export default FormInputConfig