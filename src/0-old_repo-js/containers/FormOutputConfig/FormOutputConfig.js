import React, { Component } from 'react'

import classes from './FormOutputConfig.module.css'

import ProductsComponent from '../../components/ProductsComponent/ProductsComponent'
import * as productActions from '../../store/actions/index'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { connect } from 'react-redux'


class FormOutputConfig extends Component {

    state = {
        inputValue: '',
        isSearchOn: false,
        errorMsg: null,
        minCharLength: 2
    }
    
    
    removeProductHandler = id => {
        const productsList = 
            this.props.productsList.filter(product => 
                product.id !== id
            )

        this.props.onPostProducts(productsList, 'remove')
    }

    
    updateQtdeHandler = (arg, id) => {

        let productsList = this.props.productsList.map(product => {
            return {...product}
        })
        
        let qtde = null

        productsList.forEach((product, i) => {
            if (product.id === id) {
                if (arg === 'up') {
                    productsList[i].qtde = product.qtde+1
                    productsList[i].valorTotal = product.qtde * product.valor
                }

                if (arg === 'down') {
                    productsList[i].qtde = product.qtde-1
                    productsList[i].valorTotal = product.qtde * product.valor
                }

                qtde = productsList[i].qtde
            }
        })

        if (qtde > 0) {
            this.props.onPostProducts(productsList, 'updQtde')
        } else {
            const remove = window.confirm('Quantidade deve ser maior que 0. \nO produto será excluído!')

            if (remove === true) this.removeProductHandler(id)
        }
    }

    orderListHandler = (order, direction, ul, products) => {
        this.props.onSetOrder([direction, order], ul, products)
    }

    searchProductHandler = e => {
        let inputValue = e.currentTarget.parentNode.childNodes[1].value
        let isSearchOn
        let errorMsg

        if (inputValue !== '') {

            if (inputValue.length >= this.state.minCharLength) {
                isSearchOn = true
                errorMsg = null
            } else {
                inputValue = ''
                isSearchOn = false
                errorMsg = '*Insira ao menos 3 caracteres para iniciar a busca'
            }
            
        } else {
            isSearchOn = false
            errorMsg = null
        }

        this.setState({
            inputValue,
            isSearchOn,
            errorMsg
        })

    }


    render () {
        
        return (
            <div className={classes.FormOutput_container}>
                <div>
                    <h2>Lista De Produtos</h2>
                </div>
                <div className={classes.Search_container}>
                    <div>
                        <FontAwesomeIcon 
                            icon="search" 
                            color="rgb(126, 125, 125)"
                        />
                        <input 
                            placeholder="Busca por produtos" 
                            onChange={this.searchProductHandler}
                        />
                    </div>
                    <span>{this.state.errorMsg}</span>
                </div>
                <ProductsComponent 
                    products={this.props.productsList} 
                    productsOrder={this.props.listOrder}
                    removeProduct={(id) => this.removeProductHandler(id)}
                    updateProduct={(arg, id) => this.updateQtdeHandler(arg, id)}
                    orderList={(ord, dir, ul, products) => this.orderListHandler(ord, dir, ul, products)}
                    searchValue={this.state.inputValue}
                    searchOn={this.state.isSearchOn}
                />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        productsList: state.productsDataState,
        listOrder: state.listOrder
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostProducts: (products, origin) =>
            dispatch(productActions.postProducts(products, origin)),
        onSetOrder: (order, ul, products) =>
            dispatch(productActions.setOrder(order, ul, products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormOutputConfig)