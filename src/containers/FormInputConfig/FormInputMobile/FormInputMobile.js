import React from 'react'

import classes from './FormInputMobile.module.css'

import FormInputConfig from '../FormInputConfig'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FormInputMobile = (props) => {
   const closeResponsiveFormHandler = () => {
      props.toggleForm()
   }

   return (
      <div
         className={classes.Insert_product_container}
         id='responsive_form'
      >
         <FontAwesomeIcon
            icon="external-link-alt"
            color="red"
            size="3x"
            onClick={closeResponsiveFormHandler}
         />
         <FormInputConfig/>
      </div>
   )
}

export default FormInputMobile