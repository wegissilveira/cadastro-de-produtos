import React from 'react'

import classes from './FormInputConfig.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormInputConfig = props => {

    const closeResponsiveForm = () => {
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
                onClick={closeResponsiveForm}
            />
            <div className={classes.Insert_product_subContainer}>
                <div>
                    <h2>Registre Um Novo Produto</h2>
                </div>
                <div className={classes.Insert_product_form}>
                    <div>
                        <input placeholder="Nome" />
                        <input placeholder="Quantidade" />
                        <input placeholder="Valor Unitário" />
                    </div>
                    <div>
                        <p>Inserir</p>
                        <FontAwesomeIcon icon="chevron-circle-right" color="#8DFFC2"/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default FormInputConfig