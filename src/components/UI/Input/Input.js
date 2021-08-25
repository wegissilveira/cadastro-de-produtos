import React, { Fragment } from 'react'

import classes from './Input.module.css'

const Input = props => {

    const inputClasses = [classes.InputElement]
    let validationMsg = null

    if (props.invalid && props.touched) {
        inputClasses.push(classes.Invalid)
    }
    
    if (props.invalid && props.touched) {
        
        const fieldName = props.elementConfig.name

        if (fieldName === 'nome') {
            validationMsg = <span>&nbsp; *O nome do produto não deve iniciar com espaço.</span>
        }

        if (fieldName === 'qtde') {
            validationMsg = <span>&nbsp; *Somente números e ponto. Quantidade não deve iniciar com 0.</span>
        }

        if (fieldName === 'valor') {
            validationMsg = <span>&nbsp; *Somente números e ponto. Valor não deve iniciar com 0.</span>
        }
    }
    
    let inputElement = 
        <input 
            className={inputClasses.join(' ')} 
            onChange={props.changed}
            value={props.value}
            {...props.elementConfig} 
        />  


    return (
        <Fragment>
            <label> 
                {props.label}
                {validationMsg}
            </label>
            {inputElement}
        </Fragment>
    )
}

export default Input