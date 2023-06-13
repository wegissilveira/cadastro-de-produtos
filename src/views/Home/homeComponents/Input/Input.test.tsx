import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'
import { store, Provider } from 'test-setup'
import { outputForm } from 'helpers/outputForm'

const renderInputComponent = () => {
   const changedMock = jest.fn() 

   const { container } = render(
      <Provider store={store}>
         <Input productForm={outputForm} changed={changedMock} />
      </Provider>
   )

   return { container, changedMock }
}

describe('input component', () => {
   test('renders an input and a placeholder for each elementType in the config array', () => {
      const { container } = renderInputComponent()
      const allInputs = screen.getAllByRole('textbox')
      const labelElements = container.getElementsByTagName('label')

      let elsLength = 0
      outputForm.forEach(input => {
         if (input.config.elementType) elsLength++
      })

      expect(allInputs).toHaveLength(elsLength)
      expect(labelElements).toHaveLength(elsLength)
   })

   test('renders label with the expected text based on config object', () => {
      const { container } = renderInputComponent()
      const labelElements = container.getElementsByTagName('label')

      const labelObj: string[] = []
      outputForm.forEach(input => {
         if (input.config.elementType) labelObj.push(input.config.label as string)
      })

      labelObj.forEach((label, i) => {
         expect(labelElements[i]).toHaveTextContent(label)
      })
   })

   test('renders inputs with the expected placeholder based on config object', () => {
      renderInputComponent()
      const allInputs = screen.getAllByRole('textbox')

      const inputObj: string[] = []
      outputForm.forEach(input => {
         if (input.config.elementType) inputObj.push(input.config.elementConfig?.placeholder as string)
      })

      inputObj.forEach((placeholder, i) => {
         expect(allInputs[i]).toHaveAttribute('placeholder', placeholder)
      })
   })

   test('changed was called with the correct values', () => {
      const { changedMock } = renderInputComponent()
      const allInputs = screen.getAllByRole('textbox')

      fireEvent.change(allInputs[0], { target: {value: 'Mock Product'} })

      expect(changedMock).toHaveBeenCalledTimes(1)
      expect(changedMock).toHaveBeenCalledWith(expect.any(Object), 1)
   })
})