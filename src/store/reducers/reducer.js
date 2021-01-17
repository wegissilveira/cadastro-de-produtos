import productsDataFn from '../../data/productsData'

import * as actionTypes from '../actions/actionTypes'

const initialState = {
    // productsDataState: productsDataFn()
    // productsDataState: null
    productsDataState: []
}

const reducer = ((state = initialState, action) => {

    if (action.type === actionTypes.GET_PRODUCT) {
        return {
            ...state,
            productsDataState: action.products
        }
    }
    return state
    
})
// console.log(productsDataFn())
export default reducer