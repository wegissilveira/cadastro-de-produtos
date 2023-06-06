import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'

import { Provider } from "test-setup"
import ProductsListQtde from './ProductsListQtde'


const mockStore = configureStore([])
const initialState = {
   productsDataState: [
      { id: 1, qtde: 2 },
      { id: 2, qtde: 3 },
   ],
}
const store = mockStore(initialState)

const renderQtyComponent = () => {
   render(
      <Provider store={store}>
         <ProductsListQtde qtde={2} id={1} />
      </Provider>
   )
}

describe('quantity component', () => {
   test('prints the correct quantity value', () => {
      renderQtyComponent()
      const qtyEl = screen.getAllByRole('heading')

      for (let i=0; qtyEl.length <= i; i++) {
         const textContent = initialState.productsDataState[i].qtde + ''
         expect(qtyEl[i]).toBeInTheDocument()
         expect(qtyEl[i]).toHaveTextContent(textContent)
      }    
   })

   test('has a minus button on its left and a plus button on its right', () => {
      renderQtyComponent()

      const minusIcon = screen.getByLabelText('minus')
      const plusIcon = screen.getByLabelText('plus')
    
      expect(minusIcon).toBeInTheDocument()
      expect(plusIcon).toBeInTheDocument()

      expect(minusIcon.compareDocumentPosition(plusIcon)).toBe(4)
   })
})