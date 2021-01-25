import React from 'react'

import classes from './Toastify.module.css'

const Toastify = props => {

    // let [translateX, setTranslateX] = React.useState(-110)

    let translateX = -110

    if (props.open === true) {
        translateX = 0
    } else {
        translateX = -110
    }

    // if (props.open === )


    return (
        <div 
            style={{transform: `translateX(${translateX}%)`}} 
            className={classes.Toastify_container}
        >
            <h1>TESTE</h1>
        </div>
    )
}

export default Toastify