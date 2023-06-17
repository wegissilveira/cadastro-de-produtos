import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { store, Provider } from 'test-setup'

import FormInputConfig from './FormInputConfig'


describe('full form input', () => {
   let allInputs: HTMLElement[]
   let submitButton: HTMLElement

   beforeEach(() => {
      render(
         <Provider store={store}>
            <FormInputConfig />
         </Provider>
      )   

      submitButton = screen.getByRole('button', {name: 'Inserir Produto'})
      allInputs = screen.getAllByRole('textbox')

      fireEvent.change(allInputs[0], {target: {value: ''}})
      fireEvent.change(allInputs[1], {target: {value: ''}})
      fireEvent.change(allInputs[2], {target: {value: ''}})

   })

   test('submit button should be initially disabled', () => {
      expect(submitButton).toBeInTheDocument()
      expect(submitButton).toBeDisabled()
   })

   test('submit button should be set enable if all inputs are valid', () => {
      expect(submitButton).toBeDisabled()

      fireEvent.change(allInputs[0], {target: {value: 'Mock Product'}})
      fireEvent.change(allInputs[1], {target: {value: '10'}})
      fireEvent.change(allInputs[2], {target: {value: '50'}})

      expect(submitButton).not.toBeDisabled()
   })
   
   test('form should be cleared after submission', () => {
      const nameInput = allInputs[0] as HTMLInputElement
      const qtyInput = allInputs[1] as HTMLInputElement
      const unitValueInput = allInputs[2] as HTMLInputElement

      fireEvent.change(nameInput, {target: {value: 'Mock Product'}})
      fireEvent.change(qtyInput, {target: {value: '10'}})
      fireEvent.change(unitValueInput, {target: {value: '50'}})

      expect(nameInput.value).toBe('Mock Product')
      expect(qtyInput.value).toBe('10')
      expect(unitValueInput.value).toBe('50')

      expect(submitButton).not.toBeDisabled()

      fireEvent.click(submitButton)

      expect(nameInput.value).toBe('')
      expect(qtyInput.value).toBe('')
      expect(unitValueInput.value).toBe('')
   })
})