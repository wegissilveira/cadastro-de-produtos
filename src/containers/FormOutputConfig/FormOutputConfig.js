import React, { Component } from 'react'

import classes from './FormOutputConfig.module.css'

import ProductComponent from '../../components/ProductComponent/ProductComponent'
import ProductComponentMobile from '../../components/ProductComponentMobile/ProductComponentMobile'

// import productsDataFn from '../../data/productsData'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from 'react-redux'


class FormOutputConfig extends Component {

    render () {

        return (
            <div className={classes.FormOutput_container}>
                <div>
                    <h2>Lista De Produtos</h2>
                </div>
                <div className={classes.Search_container}>
                    <FontAwesomeIcon 
                        icon="search" 
                        color="rgb(126, 125, 125)"
                    />
                    <input placeholder="Busca por produtos" />
                </div>
                <div className={classes.FormOutput_header}>
                    <p>ID</p>
                    <p>Nome</p>
                    <p>Quantidade</p>
                    <p>Valor Unitário</p>
                    <p>Valor Total</p>
                    <p></p>
                </div>
                
                {/* ** */}

                <ProductComponent products={this.props.productsList} />

                <ProductComponentMobile products={this.props.productsList}  />                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        productsList: state.productsDataState
    }
}

export default connect(mapStateToProps)(FormOutputConfig)