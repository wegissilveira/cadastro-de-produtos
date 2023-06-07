import {
   render,
   screen,
   fireEvent,
   act,
} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { 
   store,
   Provider
 } from "test-setup";
import ProductsListComponent from "../ProductsList/ProductsList";

const renderProductsListComponent = () => {
   render(
      <Provider store={store}>
         <ProductsListComponent />
      </Provider>
   )
}

describe("quantity component", () => {   
   test("is incremented by one after plus button is clicked on", () => {
      renderProductsListComponent()
      
      const plusButton = screen.getAllByLabelText("plus")[0]
      const qtyEl = screen.getAllByRole("heading")[0]

      expect(qtyEl.textContent).toBe("2")
      fireEvent.click(plusButton)
      expect(qtyEl.textContent).toBe("3")
   })

   test("is decremented by one after minus button is clicked on", () => {
      renderProductsListComponent()
      
      const minusButton = screen. getAllByLabelText('minus')[0]
      const qtyEl = screen.getAllByRole("heading")[0]

      expect(qtyEl.textContent).toBe("3")
      fireEvent.click(minusButton)
      expect(qtyEl.textContent).toBe("2")
   })
})

describe('product row', () => {
   test('is removed from the DOM after quantity becomes 0', () => {
      const confirmMock = jest.spyOn(window, "confirm")
      confirmMock.mockImplementation(() => true)
      let actionExecuted = false

      renderProductsListComponent()
      
      const minusButton = screen. getAllByLabelText('minus')[0]
      const qtyEl = screen.getAllByRole("heading")[0]

      expect(qtyEl.textContent).toBe("2")
      fireEvent.click(minusButton)
      expect(qtyEl.textContent).toBe("1")
      fireEvent.click(minusButton)
      expect(confirmMock).toHaveBeenCalledTimes(1)      

      if (confirmMock.mock.calls.length === 1) actionExecuted = true
     
      expect(actionExecuted).toBe(true)
      expect(qtyEl).not.toBeInTheDocument()

      confirmMock.mockRestore()
   })
})

const pause = () => {
   return new Promise<void>(resolve => {
      setTimeout(() => {
         resolve()
      }, 500)
   })
}