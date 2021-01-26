import * as actionTypes from './actionTypes'


let errorMsg = [
    'green', 
    'Sucesso!'
]

export const getProducts = products => {
    return {
        type: actionTypes.GET_PRODUCT,
        products: products
    }
}

export const setToastify = (toastifyDetails, open = true) => {
    return {
        type: actionTypes.SET_TOASTIFY,
        toastify: toastifyDetails,
        open: open
    }
}

export const postProducts = (products, origin) => {
    return dispatch => {
        
        try {
            localStorage.setItem('products_list', JSON.stringify(products))
        } catch (e) {
            console.log('error POST:')
            // console.log(e)
            errorMsg = ['red', 'Algo saiu errado!']
        }
        // console.log('error .....:')
        dispatch(setToastify(errorMsg))
        dispatch(initProducts(origin))
    }
}

export const setOrder = (order, ul, products) => {
    return dispatch => {
        try {
            localStorage.setItem('list_ordering', JSON.stringify(order))
            localStorage.setItem('unordered_list', JSON.stringify(ul))
        } catch (e) {
            console.log('error:')
            // console.log(e)
            errorMsg = ['red', 'Algo saiu errado!']
        }

        dispatch(setToastify(errorMsg))
        
        ul !== true ? 
            dispatch(initProducts()) :
            dispatch(postProducts(products))
    }
}

const orderList = (productsData, order, direction, ul) => {

    let productsList = productsData
    
    if (ul !== true) {
        if (direction === 'up') {
            order !== 'nome' ? 
                productsList.sort((a, b) => b[order] - a[order]) :
                productsList.sort((a, b) => b[order].localeCompare(
                    a[order],
                    undefined,
                    { numeric: true, sensitivity: 'base' }
                ))
        } else {
            order !== 'nome' ? 
                productsList.sort((a, b) => a[order] - b[order]) :
                productsList.sort((a, b) => a[order].localeCompare(
                    b[order],
                    undefined,
                    { numeric: true, sensitivity: 'base' }
                ))
        }
    }    

    return productsList
}

export const initProducts = origin => {
    return dispatch => {
        let productsData = []

        let productsList_storage
        let list_ordering
        let unordered_list
        try {
            productsList_storage = JSON.parse(localStorage.getItem('products_list'))
            list_ordering = JSON.parse(localStorage.getItem('list_ordering'))
            unordered_list = JSON.parse(localStorage.getItem('unordered_list'))
        } catch(e) {
            productsList_storage = null
            list_ordering = null
            
            console.log('error INIT:')
            // console.log(e)
            errorMsg = ['red', 'Algo saiu errado!']
        }

        if (productsList_storage !== null) {
            productsData = productsList_storage
        }

        if (list_ordering !== null && origin !== 'updQtde') {
            productsData = orderList(productsData, list_ordering[1], list_ordering[0], unordered_list)
        }
        
        dispatch(setToastify(errorMsg))
        dispatch(getProducts(productsData))
    }
}