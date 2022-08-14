import React from 'react'

import classes from './FormOutputConfig.module.css'

import InputSearch from 'views/Home/homeComponents/InputSearch/InputSearch'
import ProductListMobile from '../ProductsComponent/ProductListMobile/ProductListMobile'
import ProductsList from '../ProductsComponent/ProductsList/ProductsList'



const FormOutputConfig = () => {
   console.log('2- FormOutputConfig');
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