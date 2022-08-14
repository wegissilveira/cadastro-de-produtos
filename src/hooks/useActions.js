import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { actionCreators } from '../store'

export const useActions = () => {
   console.log('5- useActions');
   const dispatch = useDispatch()
   return bindActionCreators(actionCreators, dispatch)
}