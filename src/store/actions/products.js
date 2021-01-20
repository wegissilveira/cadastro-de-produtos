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

export const setOrder = order => {
    return dispatch => {
        localStorage.setItem('list_ordering', JSON.stringify(order))
        dispatch(initProducts())
    }
}

const orderList = (productsData, order, direction) => {

    let productsList = productsData
    
    if (direction === 'up') {
        order !== 'nome' ? 
            productsList.sort((a, b) => b[order] - a[order]) :
            productsList.sort((a, b) => a[order].localeCompare(
                b[order],
                undefined,
                { numeric: true, sensitivity: 'base' }
            ))
    } else {
        order !== 'nome' ? 
            productsList.sort((a, b) => a[order] - b[order]) :
            productsList.sort((a, b) => b[order].localeCompare(
                a[order],
                undefined,
                { numeric: true, sensitivity: 'base' }
            ))
    }

    return productsList

}

export const initProducts = () => {
    return dispatch => {
        let productsData = []
        const productsList_storage = JSON.parse(localStorage.getItem('products_list'))
        const list_ordering = JSON.parse(localStorage.getItem('list_ordering'))

        if (productsList_storage !== null) {
            productsData = productsList_storage
        }

        productsData = orderList(productsData, list_ordering[1], list_ordering[0])
        
        dispatch(getProducts(productsData))
    }
}