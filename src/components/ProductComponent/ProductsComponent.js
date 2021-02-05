import React, { Fragment } from 'react'

import classes from './ProductComponent.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import TestComponent from '../TestComponent/TestComponent'

import ProductComponentMobile from '../ProductComponentMobile/ProductListMobile'

const ProductsComponent = props => {

    let products = []

    props.products.forEach(item => {
        const searchKey = new RegExp(props.searchValue, 'gi')

        if (props.searchOn) {
            if (item.nome.match(searchKey)) {
                products.push(item)
            }
        } else {
            products.push(item)
        }
    })

    return (
        <Fragment>
            <TestComponent 
                products={products}
                productsOrder={props.productsOrder}
                removeProduct={props.removeProduct}
                updateProduct={props.updateProduct}
                orderList={props.orderList}
            />
            <ProductComponentMobile
                products={products}
                orderList={props.orderList}
                productsOrder={props.productsOrder}
                updateProduct={props.updateProduct}
                removeProduct={props.removeProduct}
            />
        </Fragment>
    )
}

export default ProductsComponent