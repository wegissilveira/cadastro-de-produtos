import React from 'react'

import classes from './Layout.module.css'

import FormInputDesk from '../FormInputConfig/FormInputDesk/FormInputDesk'
import FormInputMobile from '../FormInputConfig/FormInputMobile/FormInputMobile'
import FormOutputConfig from '../FormOutputConfig/FormOutputConfig'
import Toastify from '../../components/UI/Toastify/Toastify'

import * as productActions from '../../store/actions/index'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from 'react-redux'

const Layout = () => {
   const dispatch = useDispatch()
   const { toastify, toastifyOpen } = useSelector(state => state)
   
   const toggleResponsiveForm = () => {
      const formInput_El = document.getElementById('responsive_form')
      const formInputStyle = formInput_El.style

      if (formInputStyle.display === 'block') {
         formInputStyle.display = 'none'
      } else {
         formInputStyle.display = 'block'
      }
   }

   const toggleToastifyHandler = () => {
      dispatch(productActions.setToastify('_', false))
   }

   return (
      <div className={classes.Layout_container}>
         <FormOutputConfig />
         <FormInputDesk toggleToastifyFn={toggleToastifyHandler} />
         <FormInputMobile
            toggleToastifyFn={toggleToastifyHandler}
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

         <Toastify
            open={toastifyOpen}
            toastifyDetails={toastify}
            toggleToastifyFn={toggleToastifyHandler}
         />
      </div>
   )
}

export default Layout