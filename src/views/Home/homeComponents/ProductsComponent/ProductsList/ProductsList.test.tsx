import {
   render,
   screen,
   fireEvent
} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { 
   store,
   Provider
 } from "test-setup";
import { toBeSorted } from "common/customMatchers";
import ProductsListComponent from "./ProductsList";
import products_list from "data/products_seed";

const renderProductsListComponent = () => {
   const { container } = render(
      <Provider store={store}>
         <ProductsListComponent />
      </Provider>
   )

   const qtyEl = screen.getAllByRole("heading")[0]
   const productRows = container.getElementsByClassName('Product_container')
   const firstRowParagraphs = productRows[0].getElementsByTagName('p')
   const plusButton = screen.getAllByLabelText("plus")[0]
   const minusButton = screen. getAllByLabelText('minus')[0]

   return { 
      container, 
      qtyEl, 
      productRows,
      firstRowParagraphs, 
      plusButton, 
      minusButton
   }
}

beforeEach(() => {
   localStorage.clear()
})

describe("quantity component", () => {   
   test("is incremented by one after plus button is clicked on", () => {      
      const { qtyEl, plusButton } = renderProductsListComponent()

      expect(qtyEl.textContent).toBe("2")
      fireEvent.click(plusButton)
      expect(qtyEl.textContent).toBe("3")
   })

   test("is decremented by one after minus button is clicked on", () => {
      const { qtyEl, minusButton } = renderProductsListComponent()

      expect(qtyEl.textContent).toBe("2")
      fireEvent.click(minusButton)
      expect(qtyEl.textContent).toBe("1")
   })

   test('increases and decreases valor total when it changes', () => {
      const { qtyEl, firstRowParagraphs, plusButton, minusButton } = renderProductsListComponent()

      const totalValueEl = firstRowParagraphs[firstRowParagraphs.length - 1]

      expect(qtyEl.textContent).toBe("2")
      expect(totalValueEl.textContent).toBe("R$ 20.00")

      fireEvent.click(plusButton)
      expect(qtyEl.textContent).toBe("3")
      expect(totalValueEl.textContent).toBe("R$ 30.00")

      fireEvent.click(minusButton)
      expect(qtyEl.textContent).toBe("2")
      expect(totalValueEl.textContent).toBe("R$ 20.00")
      
   })
})

describe('product row', () => {
   test('is rendered with the correct data', () => {
      const { qtyEl, firstRowParagraphs } = renderProductsListComponent()
      const idEl = firstRowParagraphs[0]
      const nameEl = firstRowParagraphs[1]
      const unitValueEl = firstRowParagraphs[2]
      const totalValueEl = firstRowParagraphs[3]

      expect(idEl.textContent).toBe('1')
      expect(nameEl.textContent).toBe('Produto 1')
      expect(qtyEl.textContent).toBe('2')
      expect(unitValueEl.textContent).toBe('R$ 10.00')
      expect(totalValueEl.textContent).toBe('R$ 20.00')
   })

   test('is removed from the DOM after quantity becomes 0', () => {
      const confirmMock = jest.spyOn(window, "confirm")
      confirmMock.mockImplementation(() => true)
      let actionExecuted = false

      const { qtyEl, minusButton } = renderProductsListComponent()

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

   test('is deleted from DOM after remove button is clicked on', () => {
      const { qtyEl } = renderProductsListComponent()

      const removeBtn = screen.getAllByLabelText('remove-product')[0]

      expect(removeBtn).toBeInTheDocument()
      expect(qtyEl).toBeInTheDocument()

      fireEvent.click(removeBtn)
      expect(qtyEl).not.toBeInTheDocument()
   })
})

describe('product list', () => {
   test('is rendered with the expected quantity of products', () => {
      const { productRows } =  renderProductsListComponent()

      expect(productRows).toHaveLength(products_list.length)
   })

   test('is sorted according to header criteria', () => {
      expect.extend({ toBeSorted })
      const { productRows } =  renderProductsListComponent()

      const arrowsUp = screen.getAllByLabelText('arrow-up')
      const arrowsDown = screen.getAllByLabelText('arrow-down')
      

      const getCurrentOrder = (column: number) => {
         const order = Array.from(productRows).map(row => {
            
            const item = row.getElementsByTagName('p')[column].textContent
            return item
         }) as []

         return order
      }      
      
      arrowsUp.forEach((arrow, i) => {
         const criteria = arrow.closest('div')?.textContent
         fireEvent.click(arrow)
         if (i !== 2) {            
            let column = i
            if (i > 2) {
               column = i-1
            }
            
            const order = getCurrentOrder(column)
            expect(productRows).toBeSorted(order, 'desc', criteria)
         } else {
            const qtyEls = screen.getAllByRole('heading')
            const order = Array.from(qtyEls).map(el => {            
               const item = el.textContent
               return item
            }) as []

            expect(productRows).toBeSorted(order, 'desc', criteria)
         }
      })

      arrowsDown.forEach((arrow, i) => {
         const criteria = arrow.closest('div')?.textContent
         fireEvent.click(arrow)
         if (i !== 2) {
            let column = i
            if (i > 2) {
               column = i-1
            }

            const order = getCurrentOrder(column)   
            expect(productRows).toBeSorted(order, 'asc', criteria)
         } else {
            const qtyEls = screen.getAllByRole('heading')
            const order = Array.from(qtyEls).map(el => {            
               const item = el.textContent
               return item
            }) as []

            expect(productRows).toBeSorted(order, 'asc', criteria)
         }
      })
   })
})