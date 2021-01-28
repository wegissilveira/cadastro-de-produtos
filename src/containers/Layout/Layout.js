import React, { Component } from 'react'

import classes from './Layout.module.css'

import FormInputConfig from '../FormInputConfig/FormInputConfig'
import FormOutputConfig from '../FormOutputConfig/FormOutputConfig'
import Toastify from '../../components/UI/Toastify/Toastify'

import * as productActions from '../../store/actions/index'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from 'react-redux'

class Layout extends Component {

    state = {
        openToastify: false
    }


    toggleResponsiveForm = () => {
        const formInput_El = document.getElementById('responsive_form')
        const formInputStyle = formInput_El.style
        
        if (formInputStyle.display === 'block') {
            formInputStyle.display = 'none'
        } else {
            formInputStyle.display = 'block'
        }
    }

    toggleToastifyHandler = () => {
        this.props.onSetToastify('_', false)
    }


    render () {
        return (
            <div className={classes.Layout_container}>
                <FormOutputConfig />
                <FormInputConfig 
                    toggleForm={this.toggleResponsiveForm} 
                    toggleToastifyFn={this.toggleToastifyHandler}
                />
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
                <Toastify 
                    open={this.props.toastifyOpen} 
                    toastifyDetails={this.props.toastify}
                    toggleToastifyFn={this.toggleToastifyHandler}

                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toastify: state.toastify,
        toastifyOpen: state.toastifyOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetToastify: (_, open) =>
            dispatch(productActions.setToastify(_, open))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)