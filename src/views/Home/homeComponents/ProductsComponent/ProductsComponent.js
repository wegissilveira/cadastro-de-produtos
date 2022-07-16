import React, { Fragment } from 'react'

import ProductsList from 'views/Home/homeComponents/ProductsList/ProductsList'
import ProductListMobile from 'views/Home/homeComponents/ProductListMobile/ProductListMobile'

import { useSelector } from 'react-redux'

const ProductsComponent = props => {
   const { productsDataState } = useSelector(state => state)
   
   // Criar hook para executar esse boco de busca - ou uma função externa, ANALISAR A NECESSIDADE
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