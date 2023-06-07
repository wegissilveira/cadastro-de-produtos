import { ActionType } from '../actions/actionTypes'
import { ProductsList } from 'common/types'

export const updateProducts = (products: ProductsList[], productsOrder: string[]) => {   
   // console.log('products: ', products)
   // console.log('productsOrder: ', productsOrder)
   return {
      type: ActionType.UPDATE_PRODUCT,
      products: products,
      listOrder: productsOrder
   }
}

export const setToastify = (toastifyDetails: string[] | string, open = true) => {
   return {
      type: ActionType.SET_TOASTIFY,
      toastify: toastifyDetails,
      open: open
   }
}

export const setSearch = (searchProducts: ProductsList[], isSearchOn: boolean, inputValue?: string) => {
   return {
      type: ActionType.SET_SEARCH,
      searchProducts: searchProducts,
      isSearchOn: isSearchOn,
      inputValue: inputValue
   }
}