import classes from './OpenFormButton.module.css'

import { toggleMobileForm } from 'helpers/functions'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const OpenFormButton = () => {
   return (
      <div
         className={classes.Open_modal_button}
         onClick={toggleMobileForm}
      >
         <FontAwesomeIcon
            icon="plus"
            color="#fff"
            size="2x"
         />
      </div>
   )
}

export default OpenFormButton