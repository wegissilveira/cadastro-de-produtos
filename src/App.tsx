import React from 'react';

import Home from './views/Home/Home'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faPlus,
  faMinus,
  faChevronCircleRight,
  faSearch,
  faExternalLinkAlt,
  faSortAmountDownAlt,
  faSortAmountUp
} from '@fortawesome/free-solid-svg-icons'

import { 
  faTrashAlt
} from '@fortawesome/free-regular-svg-icons'

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


function App() {
  return (
    <Home />
  )
}

export default App;
