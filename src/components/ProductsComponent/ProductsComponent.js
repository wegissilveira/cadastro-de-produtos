import React, { Fragment } from 'react'

import ProductsList from '../ProductsList/ProductsList'
import ProductListMobile from '../ProductListMobile/ProductListMobile'

import { useSelector } from 'react-redux'

const ProductsComponent = props => {
   const { productsDataState } = useSelector(state => state)
   
   // Criar hook para executar esse boco de busca
   let products = []
   productsDataState.forEach(item => {
      const searchKey = new RegExp(props.searchValue, 'gi')

      if (props.searchOn) {
         if (item.nome.match(searchKey)) {
            products.push(item)
         }
      } else {
         products.push(item)
      }
   })

   return (
      <Fragment>
         <ProductsList
            products={products}
            updateProduct={props.updateProduct}
            removeProduct={props.removeProduct}
         />
         <ProductListMobile
            products={products}
            updateProduct={props.updateProduct}
            removeProduct={props.removeProduct}
         />
      </Fragment>
   )
}

export default ProductsComponent