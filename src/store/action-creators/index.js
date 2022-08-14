import * as actionTypes from '../actions/actionTypes'

export const updateProducts = (products, productsOrder) => {
   console.log('5.5- Action creators products')
   return {
      type: actionTypes.UPDATE_PRODUCT,
      products: products,
      listOrder: productsOrder
   }
}

export const setToastify = (toastifyDetails, open = true) => {
   return {
      type: actionTypes.SET_TOASTIFY,
      toastify: toastifyDetails,
      open: open
   }
}

export const setSearch = (searchProducts, isSearchOn, inputValue) => {
   return {
      type: actionTypes.SET_SEARCH,
      searchProducts: searchProducts,
      isSearchOn: isSearchOn,
      inputValue: inputValue
   }
}