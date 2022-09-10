import React from 'react'

import classes from './FormOutputConfig.module.scss'

import InputSearch from 'views/Home/homeComponents/InputSearch/InputSearch'
import ProductListMobile from '../ProductsComponent/ProductListMobile/ProductListMobile'
import ProductsList from '../ProductsComponent/ProductsList/ProductsList'



const FormOutputConfig = () => {
   return (
      <div className={classes.FormOutput_container}>
         <div>
            <h2>Lista De Produtos</h2>
         </div>
         <InputSearch />
         <ProductsList/>
         <ProductListMobile/>
      </div>
   )
}


export default FormOutputConfig