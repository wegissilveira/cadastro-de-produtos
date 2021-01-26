import * as actionTypes from '../actions/actionTypes'

const initialState = {
    productsDataState: [],
    toastify: [
        'green', 
        ''
    ],
    toastifyOpen: false
}

const reducer = ((state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_PRODUCT:
            return {
                ...state,
                productsDataState: action.products
            }
        case actionTypes.SET_TOASTIFY:
            return {
                ...state,
                toastify: action.toastify,
                toastifyOpen: action.open
            }
        default:
            return state
    }
    
})

export default reducer