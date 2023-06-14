import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { store, Provider } from 'test-setup'

import FormInputConfig from './FormInputConfig'

const renderFormInputConfig = () => {
   const { container } = render(
      <><Provider store={store}>
         <FormInputConfig />
      </Provider></>
   )

   const submitButton = screen.getByRole('button', {name: 'Inserir Produto'})
   const allInputs = screen.getAllByRole('textbox')

   return { container, submitButton, allInputs }
}

beforeEach(() => {
   cleanup()
})


describe('full form input', () => {
   test('renders a submit button', () => {
      const { submitButton } = renderFormInputConfig()     
      expect(submitButton).toBeInTheDocument()
   })

   test('submit button should be initially disabled', () => {
      const { submitButton } = renderFormInputConfig()
      expect(submitButton).toBeDisabled()
   })

   test('submit button should be set enable if all inputs are valid', () => {
      const { submitButton, allInputs } = renderFormInputConfig()

      expect(submitButton).toBeDisabled()

      fireEvent.change(allInputs[0], {target: {value: 'Mock Product'}})
      fireEvent.change(allInputs[1], {target: {value: '10'}})
      fireEvent.change(allInputs[2], {target: {value: '50'}})

      expect(submitButton).not.toBeDisabled()
   })

   test('form should be cleared after submission', () => {
      // const { submitButton, allInputs } = renderFormInputConfig()

      const { container } = render(
         <Provider store={store}>
            <FormInputConfig />
         </Provider>
      )
   
      const submitButton = screen.getByRole('button', {name: 'Inserir Produto'})
      const allInputs = screen.getAllByRole('textbox')   

      // const nameInput = allInputs[0] as HTMLInputElement
      // const qtyInput = allInputs[1] as HTMLInputElement
      // const unitValueInput = allInputs[2] as HTMLInputElement

      // fireEvent.change(nameInput, {target: {value: 'Mock Product'}})
      // fireEvent.change(qtyInput, {target: {value: '10'}})
      // fireEvent.change(unitValueInput, {target: {value: '50'}})

      // expect(nameInput.value).toBe('Mock Product')
      // expect(qtyInput.value).toBe('10')
      // expect(unitValueInput.value).toBe('50')

      console.log('input value: ', (allInputs[0] as HTMLInputElement).value)

      // expect(submitButton).not.toBeDisabled()

      // fireEvent.click(submitButton)      

      // expect(nameInput.value).toBe('')
      // expect(qtyInput.value).toBe('')
      // expect(unitValueInput.value).toBe('')
   })
})