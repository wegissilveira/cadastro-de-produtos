// import * as actionTypes from '../actions/actionTypes'


// interface initialState {
   
// }

// const initialState = {
//    productsDataState: [],
//    searchProducts: [],
//    isSearchOn: false,
//    inputValue: '',
//    listOrder: [],
//    toastify: ['green', ''],
//    toastifyOpen: false
// }

// const reducer = ((state = initialState, action) => {
//    switch (action.type) {
//       case actionTypes.UPDATE_PRODUCT:
//          return {
//             ...state,
//             productsDataState: action.products,
//             listOrder: !action.listOrder ? state.listOrder : action.listOrder
//          }
//       case actionTypes.SET_TOASTIFY:
//          return {
//             ...state,
//             toastify: action.toastify,
//             toastifyOpen: action.open
//          }
//       case actionTypes.SET_SEARCH:
//          return {
//             ...state,
//             searchProducts: action.searchProducts,
//             isSearchOn: action.isSearchOn,
//             inputValue: action.inputValue
//          }
//       default:
//          return state
//    }
// })

// export default reducer