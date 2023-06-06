import {
   render,
   screen,
   fireEvent,
} from "@testing-library/react";
import { store, Provider } from "test-setup";
import ProductsListComponent from "../ProductsList/ProductsList";


const renderCounterComponent = () => {
   render(
      <Provider store={store}>
         <ProductsListComponent />
      </Provider>
   )
}

describe("quantity component", () => {
   test("plus button is clicked the quantity is incremented by 1", () => {
      renderCounterComponent()
      
      const plusButton = screen.getAllByLabelText("plus")[0]
      const qtyEl = screen.getAllByRole("heading")[0]

      expect(qtyEl.textContent).toBe("5")
      fireEvent.click(plusButton)
      expect(qtyEl.textContent).toBe("6")
   })
})
