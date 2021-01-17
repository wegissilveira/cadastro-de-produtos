import React, { Component } from 'react'

import classes from './FormOutputConfig.module.css'

import ProductComponent from '../../components/ProductComponent/ProductComponent'
import ProductComponentMobile from '../../components/ProductComponentMobile/ProductComponentMobile'
import * as actionTypes from '../../store/actions/actionTypes'

import productsDataFn from '../../data/productsData'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from 'react-redux'


class FormOutputConfig extends Component {


    removeProductHandler = id => {
        const productsList = 
            this.props.productsList.filter(product => 
                product.id !== id
            )

        localStorage.setItem('products_list', JSON.stringify(productsList))
        this.props.onProductsListState()
    }

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

                <ProductComponent 
                    products={this.props.productsList} 
                    removeProduct={(id) => this.removeProductHandler(id)}
                />

                <ProductComponentMobile 
                    products={this.props.productsList}  
                />                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        productsList: state.productsDataState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onProductsListState: () => dispatch({
                type: actionTypes.ADD_PRODUCT, 
                value: productsDataFn()
            })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOutputConfig)