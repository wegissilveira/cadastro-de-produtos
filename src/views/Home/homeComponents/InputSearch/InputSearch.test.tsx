import { render, screen, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'

import InputSearch from "./InputSearch"
import { Provider, store } from "test-setup"

const renderInputSearchComponent = () => {
   render(
      <Provider store={store}>
         <InputSearch />
      </Provider>
   )
   const searchIcon = screen.getByLabelText('search-icon')
   const inputSearch = screen.getByRole('textbox') as HTMLInputElement

   return { searchIcon, inputSearch }
}

describe('search component', () => {
   test('render an icon and an input', () => {      
      const { searchIcon, inputSearch } = renderInputSearchComponent()
      
      expect(searchIcon).toBeInTheDocument()
      expect(inputSearch).toBeInTheDocument()
   })

   test('render icon on left and input on right', () => {
      const { searchIcon, inputSearch } = renderInputSearchComponent()
      expect(searchIcon.compareDocumentPosition(inputSearch)).toBe(4)
   })

   test('warning message is shown if typed text has less than three letters', () => {
      expect.assertions(4)

      const { inputSearch } = renderInputSearchComponent()
      let warningSpan = screen.queryByText('*Insira ao menos 3 caracteres para iniciar a busca')
      expect(warningSpan).not.toBeInTheDocument()

      fireEvent.change(inputSearch, {target: {value: '1'}})
      warningSpan = screen.queryByText('*Insira ao menos 3 caracteres para iniciar a busca')
      expect(warningSpan).toBeInTheDocument()

      fireEvent.change(inputSearch, {target: {value: '12'}})
      warningSpan = screen.queryByText('*Insira ao menos 3 caracteres para iniciar a busca')
      expect(warningSpan).toBeInTheDocument()

      fireEvent.change(inputSearch, {target: {value: '123'}})
      warningSpan = screen.queryByText('*Insira ao menos 3 caracteres para iniciar a busca')
      expect(warningSpan).not.toBeInTheDocument()
   })
})