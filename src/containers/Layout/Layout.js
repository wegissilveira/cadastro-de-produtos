import React, { Component } from 'react'

import classes from './Layout.module.css'

import FormInputConfig from '../FormInputConfig/FormInputConfig'
import FormOutputConfig from '../FormOutputConfig/FormOutputConfig'

class Layout extends Component {
    render () {
        return (
            <div className={classes.Layout_container}>
                <FormOutputConfig />
                <FormInputConfig />
            </div>
        )
    }
}

export default Layout