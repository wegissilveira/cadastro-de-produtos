import React from 'react'

import classes from './FormInputMobile.module.scss'

import FormInputConfig from 'views/Home/homeComponents/FormInputConfig/FormInputConfig'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
   toggleForm: () => void
}

const FormInputMobile = ({ toggleForm }: Props) => {
   const closeResponsiveFormHandler = () => {
      toggleForm()
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