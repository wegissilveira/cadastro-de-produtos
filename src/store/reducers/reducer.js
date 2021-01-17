import * as actionTypes from '../actions/actionTypes'

const initialState = {
    productsDataState: []
}

const reducer = ((state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_PRODUCT:
            return {
                ...state,
                productsDataState: action.products
            }
        default:
            return state
    }
    
})

export default reducer