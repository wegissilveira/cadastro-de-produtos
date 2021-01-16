import productsDataFn from '../../data/productsData'

import * as actionTypes from '../actions/actionTypes'

const initialState = {
    productsDataState: productsDataFn()
}

const reducer = ((state = initialState, action) => {

    if (action.type === actionTypes.ADD_PRODUCT) {
        return {
            ...state,
            productsDataState: action.value
        }
    }

    return state
    
})

export default reducer