import React, { Component } from 'react'

import classes from './Layout.module.css'

import FormInputConfig from '../FormInputConfig/FormInputConfig'
import FormOutputConfig from '../FormOutputConfig/FormOutputConfig'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Layout extends Component {

    toggleResponsiveForm = () => {
        const formInput_El = document.getElementById('responsive_form')
        const formInputStyle = formInput_El.style
        
        if (formInputStyle.display === 'block') {
            formInputStyle.display = 'none'
        } else {
            formInputStyle.display = 'block'
        }
    }


    render () {
        return (
            <div className={classes.Layout_container}>
                <FormOutputConfig />
                <FormInputConfig toggleForm={this.toggleResponsiveForm} />
                <div 
                    className={classes.Open_modal_button}
                    onClick={this.toggleResponsiveForm}
                >
                    <FontAwesomeIcon 
                        icon="plus" 
                        color="#fff" 
                        size="2x"
                    />
                </div>
            </div>
        )
    }
}

export default Layout