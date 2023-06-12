import { render, screen, fireEvent, within } from "@testing-library/react"
import Home from "./Home"
import { store, Provider } from "test-setup"
import products_list from "data/products_seed"

const renderHomeComponent = () => {
   const { container } = render(<Provider store={store}>
      <Home />
   </Provider>)

   const productRows = container.getElementsByClassName('Product_container')

   return { container, productRows }
}

describe('searched items', () => {
   test('search component returns only the search items', () => {
      const { container, productRows } = renderHomeComponent()

      const inputSearchEl = container.getElementsByClassName('Search_container')[0] as HTMLElement
      const inputSearch = within(inputSearchEl).getByRole('textbox') as HTMLInputElement

      expect(productRows).toHaveLength(products_list.length)

      fireEvent.change(inputSearch, {target: {value: 'Produto 1'}})
      expect(productRows).toHaveLength(1)

      const firstRow = productRows[0].getElementsByTagName('p')[1]
      expect(firstRow.textContent).toBe('Produto 1')
   })
})