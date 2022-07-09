import React from 'react'

import classes from './Layout.module.css'

import FormInputDesk from '../FormInputConfig/FormInputDesk/FormInputDesk'
import FormInputMobile from '../FormInputConfig/FormInputMobile/FormInputMobile'
import FormOutputConfig from '../FormOutputConfig/FormOutputConfig'
import Toastify from '../../components/UI/Toastify/Toastify'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Layout = () => {   
   const toggleResponsiveForm = () => {
      const formInput_El = document.getElementById('responsive_form')
      const formInputStyle = formInput_El.style

      if (formInputStyle.display === 'block') {
         formInputStyle.display = 'none'
      } else {
         formInputStyle.display = 'block'
      }
   }

   return (
      <div className={classes.Layout_container}>
         <FormOutputConfig />
         <FormInputDesk />
         <FormInputMobile
            toggleForm={toggleResponsiveForm}
         />
         <div
            className={classes.Open_modal_button}
            onClick={toggleResponsiveForm}
         >
            <FontAwesomeIcon
               icon="plus"
               color="#fff"
               size="2x"
            />
         </div>

         <Toastify/>
      </div>
   )
}

export default Layout