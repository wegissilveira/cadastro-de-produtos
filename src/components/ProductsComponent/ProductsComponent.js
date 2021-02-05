import React, { Fragment } from 'react'

import classes from './ProductsComponent.module.css'

import ProductsList from '../ProductsList/ProductsList'

import ProductListMobile from '../ProductComponentMobile/ProductListMobile'

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
            <ProductsList 
                products={products}
                orderList={props.orderList}
                productsOrder={props.productsOrder}
                updateProduct={props.updateProduct}
                removeProduct={props.removeProduct}
            />
            <ProductListMobile
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