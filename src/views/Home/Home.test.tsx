import { render, screen, fireEvent, within } from "@testing-library/react"
import '@testing-library/jest-dom'
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

      fireEvent.change(inputSearch, {target: {value: ''}})

      expect(productRows).toHaveLength(products_list.length)
   })
})

describe('form submission', () => {
   test('when form is submitted with valid data a product should be added to products list', () => {
      const { container, productRows } = renderHomeComponent()
      const formInputDesk = container.getElementsByClassName('Insert_product_subContainer')[0] as HTMLDivElement
      const allInputs = within(formInputDesk).getAllByRole('textbox')
      const submitButtonDesk = screen.getAllByRole('button', {name: 'Inserir Produto'})[0]

      expect(productRows).toHaveLength(products_list.length)

      fireEvent.change(allInputs[0], {target: {value: 'Mock Product'}})
      fireEvent.change(allInputs[1], {target: {value: '10'}})
      fireEvent.change(allInputs[2], {target: {value: '50'}})

      fireEvent.click(submitButtonDesk)

      expect(productRows).toHaveLength(products_list.length+1)

      const lastRow = productRows[productRows.length - 1].getElementsByTagName('p')[1]
      expect(lastRow.textContent).toBe('Mock Product')
   })
})