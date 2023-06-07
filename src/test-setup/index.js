import { library } from "@fortawesome/fontawesome-svg-core"
import { 
   faPlus,
   faMinus,
   faChevronCircleRight,
   faSearch,
   faExternalLinkAlt,
   faSortAmountDownAlt,
   faSortAmountUp
} from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "store/reducers"

library.add(
   faPlus,
   faMinus,
   faTrashAlt,
   faChevronCircleRight,
   faSearch,
   faExternalLinkAlt,
   faSortAmountDownAlt,
   faSortAmountUp
)

// const rootReducer = combineReducers({ reducer })
const store = createStore(reducer)

export { store, Provider }