import * as actionTypes from './actionTypes'

import productsDataFn from '../../data/productsData'

export const setProduct = products => {
    return {
        type: actionTypes.SET_PRODUCT,
        products: products
    }
}

export const getProducts = products => {
    return {
        type: actionTypes.GET_PRODUCT,
        products: products
    }
}

// export const removeProduct = products => {
//     return {
//         type: actionTypes.SET_PRODUCT,
//         products: products
//     }
// }

export const initProducts = () => {
    return dispatch => {
        dispatch(getProducts(productsDataFn()))
    }
}