import { ActionType } from '../actions/actionTypes'
import { InitialState, Action } from 'common/types'


export const initialState: InitialState = {
   productsDataState: [],
   searchProducts: [],
   isSearchOn: false,
   inputValue: '',
   listOrder: [],
   toastify: ['green', ''],
   toastifyOpen: false
}

const reducer = (
   state: InitialState = initialState,
   action: Action
) => {
   // console.log('ACTION: ', action)
   switch (action.type) {
      case ActionType.UPDATE_PRODUCT:
         return {
            ...state,
            productsDataState: action.products,
            listOrder: action.listOrder
         }
      case ActionType.SET_TOASTIFY:
         return {
            ...state,
            toastify: action.toastify,
            toastifyOpen: action.open
         }
      case ActionType.SET_SEARCH:
         return {
            ...state,
            searchProducts: action.searchProducts,
            isSearchOn: action.isSearchOn,
            inputValue: action.inputValue
         }
      default:
         return state
   }
}

export default reducer