import { ActionType } from "store/actions/actionTypes"

export interface ProductsList {
   id: number
   nome: string
   qtde: number
   valor: number
   valorTotal: number
}

export interface InitialState {
   productsDataState: ProductsList[]
   searchProducts: ProductsList[]
   isSearchOn: boolean
   inputValue: string
   listOrder: string[]
   toastify: string[]
   toastifyOpen: boolean
}

interface Config {
   elementType: boolean | string
   elementConfig?: {
      type: string
      placeholder: string
      name: string
   }
   label?: string
   value: string | number
   validation?: {
      required?: boolean
   },
   valid: boolean
   touched: boolean
} 

export interface ProductForm {
   field: string
   config: Config
}

/* ActionTypes */

interface UpdateProduct {
   type: ActionType.UPDATE_PRODUCT
   products: ProductsList[]
   listOrder: (string | null)[]
}

interface SetToastify {
   type: ActionType.SET_TOASTIFY
   toastify: string[]
   open: boolean
}

interface SetSearch {
   type: ActionType.SET_SEARCH
   searchProducts: ProductsList[]
   isSearchOn: boolean
   inputValue: string
}

export type Action = 
   | UpdateProduct
   | SetToastify
   | SetSearch