import * as actionTypes from './actionTypes'

export const getProducts = products => {
    return {
        type: actionTypes.GET_PRODUCT,
        products: products
    }
}

export const postProducts = products => {
    return dispatch => {
        localStorage.setItem('products_list', JSON.stringify(products))
        dispatch(initProducts())
    }
}

export const initProducts = () => {
    return dispatch => {
        let productsData = []
        const productsList_storage = JSON.parse(localStorage.getItem('products_list'))

        if (productsList_storage !== null) {
            productsData = productsList_storage
        }
        
        dispatch(getProducts(productsData))
    }
}