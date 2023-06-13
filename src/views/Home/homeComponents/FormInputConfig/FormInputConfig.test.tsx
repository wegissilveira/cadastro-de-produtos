import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { store, Provider } from 'test-setup'

import FormInputConfig from './FormInputConfig'

const renderFormInputConfig = () => {
   const { container } = render(
      <Provider store={store}>
         <FormInputConfig />
      </Provider>
   )

   return { container }
}

describe('full form input', () => {
   test('renders a submit button', () => {
      renderFormInputConfig()
      const buttonEl = screen.getByRole('button', {name: 'Inserir Produto'})

      expect(buttonEl).toBeInTheDocument()
   })

   test('submit button should be initially disabled', () => {
      renderFormInputConfig()
      const buttonEl = screen.getByRole('button', {name: 'Inserir Produto'})

      expect(buttonEl).toBeDisabled()
   })

   test('submit button should be set enable if all inputs are valid', () => {
      renderFormInputConfig()
      const allInputs = screen.getAllByRole('textbox')
      const buttonEl = screen.getByRole('button', {name: 'Inserir Produto'})

      expect(buttonEl).toBeDisabled()

      fireEvent.change(allInputs[0], {target: {value: 'Mock Product'}})
      fireEvent.change(allInputs[1], {target: {value: '10'}})
      fireEvent.change(allInputs[2], {target: {value: '50'}})

      expect(buttonEl).not.toBeDisabled()
   })
})