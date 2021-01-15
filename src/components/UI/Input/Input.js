import React, { Fragment } from 'react'

import classes from './Input.module.css'

const Input = props => {

    const inputClasses = [classes.InputElement]

    if (props.invalid && props.touched) {
        inputClasses.push(classes.Invalid)
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
            <label>{props.label}</label>
            {inputElement}
        </Fragment>
    )
}

export default Input