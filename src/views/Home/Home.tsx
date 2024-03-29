import React from 'react'

import classes from './Home.module.scss'

import { toggleMobileForm } from 'helpers/functions'

import FormInputDesk from './homeComponents/FormInputConfig/FormInputDesk/FormInputDesk'
import FormInputMobile from './homeComponents/FormInputConfig/FormInputMobile/FormInputMobile'
import FormOutputConfig from './homeComponents/FormOutputConfig/FormOutputConfig'
import OpenFormButton from './homeComponents/FormInputConfig/OpenFormButton/OpenFormButton'
import Toastify from './homeComponents/Toastify/Toastify'


const Home = () => {   
   return (
      <div className={classes.Layout_container}>
         <FormOutputConfig />
         <FormInputDesk />
         <FormInputMobile toggleForm={toggleMobileForm} />
         <OpenFormButton />
         <Toastify/>
      </div>
   )
}

export default Home