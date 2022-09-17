import { ActionType } from "store/actions/actionTypes"

const keys = [ 'id', 'nome', 'qtde', 'valor', 'valorTotal' ] as const;
export type ProductKeys = typeof keys[number]

export interface ProductsList {
   id?: number
   nome?: string
   qtde?: number
   valor?: number
   valorTotal?: number
   isEmpty?: boolean
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

export interface Validation {
   required?: boolean
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
   validation?: Validation
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