import { library } from "@fortawesome/fontawesome-svg-core"
import { faSortAmountUp, faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons"
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducer from "store/reducers"

library.add(faSortAmountUp, faSortAmountDownAlt)

const rootReducer = combineReducers({ reducer })
const store = createStore(rootReducer)

export { store, Provider }