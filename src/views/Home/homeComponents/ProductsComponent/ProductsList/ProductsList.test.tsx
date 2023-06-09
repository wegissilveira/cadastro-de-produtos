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

const getCurrentOrder = (el: HTMLCollectionOf<Element> | HTMLElement[], heading: boolean, column: number = 0) => {
   const order = Array.from(el).map(row => {      
      const item = heading ? row.textContent : row.getElementsByTagName('p')[column].textContent
      return item
   }) as []

   return order
} 

const renderProductsListComponent = () => {
   expect.extend({ toBeSorted })
   const loadListener = jest.fn()
   window.addEventListener('load', loadListener)

   const { container } = render(
      <Provider store={store}>
         <ProductsListComponent />
      </Provider>
   )

   const qtyElFirstRow = screen.getAllByRole("heading")[0]
   const productRows = container.getElementsByClassName('Product_container')
   const firstRowParagraphs = productRows[0].getElementsByTagName('p')
   const plusButtonFirstRow = screen.getAllByLabelText("plus")[0]
   const minusButton = screen. getAllByLabelText('minus')[0]
   const removeBtn = screen.getAllByLabelText('remove-product')[0]

   return { 
      container, 
      qtyElFirstRow, 
      productRows,
      firstRowParagraphs, 
      plusButtonFirstRow, 
      minusButton,
      removeBtn,
      loadListener
   }
}

beforeEach(() => {
   localStorage.clear()
})

describe("quantity component", () => {   
   test("is incremented by one after plus button is clicked on", () => {      
      const { qtyElFirstRow, plusButtonFirstRow } = renderProductsListComponent()

      expect(qtyElFirstRow.textContent).toBe("2")
      fireEvent.click(plusButtonFirstRow)
      expect(qtyElFirstRow.textContent).toBe("3")
   })

   test("is decremented by one after minus button is clicked on", () => {
      const { qtyElFirstRow, minusButton } = renderProductsListComponent()

      expect(qtyElFirstRow.textContent).toBe("2")
      fireEvent.click(minusButton)
      expect(qtyElFirstRow.textContent).toBe("1")
   })

   test('increases and decreases valor total when it changes', () => {
      const { qtyElFirstRow, firstRowParagraphs, plusButtonFirstRow, minusButton } = renderProductsListComponent()

      const totalValueEl = firstRowParagraphs[firstRowParagraphs.length - 1]

      expect(qtyElFirstRow.textContent).toBe("2")
      expect(totalValueEl.textContent).toBe("R$ 20.00")

      fireEvent.click(plusButtonFirstRow)
      expect(qtyElFirstRow.textContent).toBe("3")
      expect(totalValueEl.textContent).toBe("R$ 30.00")

      fireEvent.click(minusButton)
      expect(qtyElFirstRow.textContent).toBe("2")
      expect(totalValueEl.textContent).toBe("R$ 20.00")
      
   })
})

describe('product row', () => {
   test('is rendered with the correct data', () => {
      const { qtyElFirstRow, firstRowParagraphs } = renderProductsListComponent()
      const idEl = firstRowParagraphs[0]
      const nameEl = firstRowParagraphs[1]
      const unitValueEl = firstRowParagraphs[2]
      const totalValueEl = firstRowParagraphs[3]

      expect(idEl.textContent).toBe('1')
      expect(nameEl.textContent).toBe('Produto 1')
      expect(qtyElFirstRow.textContent).toBe('2')
      expect(unitValueEl.textContent).toBe('R$ 10.00')
      expect(totalValueEl.textContent).toBe('R$ 20.00')
   })

   test('is removed from the DOM after quantity becomes 0', () => {
      const confirmMock = jest.spyOn(window, "confirm")
      confirmMock.mockImplementation(() => true)
      let actionExecuted = false

      const { qtyElFirstRow, minusButton } = renderProductsListComponent()

      expect(qtyElFirstRow.textContent).toBe("2")

      fireEvent.click(minusButton)
      expect(qtyElFirstRow.textContent).toBe("1")

      fireEvent.click(minusButton)
      expect(confirmMock).toHaveBeenCalledTimes(1)      

      if (confirmMock.mock.calls.length === 1) actionExecuted = true
     
      expect(actionExecuted).toBe(true)
      expect(qtyElFirstRow).not.toBeInTheDocument()

      confirmMock.mockRestore()
   })

   test('is deleted from DOM after remove button is clicked on', () => {
      const { qtyElFirstRow, removeBtn } = renderProductsListComponent()

      expect(removeBtn).toBeInTheDocument()
      expect(qtyElFirstRow).toBeInTheDocument()

      fireEvent.click(removeBtn)
      expect(qtyElFirstRow).not.toBeInTheDocument()
   })
})

describe('products list', () => {
   test('is rendered with the expected quantity of products', () => {
      const { productRows } =  renderProductsListComponent()

      expect(productRows).toHaveLength(products_list.length)
   })

   test('is sorted in descending order for each header criterion', () => {      
      const { productRows } =  renderProductsListComponent()
      const arrowsUp = screen.getAllByLabelText('arrow-up')    
      
      arrowsUp.forEach((arrow, i) => {
         const criteria = arrow.closest('div')?.textContent
         fireEvent.click(arrow)
         if (i !== 2) {            
            const column = i > 2 ? i-1 : i            
            const order = getCurrentOrder(productRows, false, column)

            expect(productRows).toBeSorted(order, 'desc', criteria)
         } else {
            const qtyElFirstRows = screen.getAllByRole('heading')
            const order = getCurrentOrder(qtyElFirstRows, true) 

            expect(productRows).toBeSorted(order, 'desc', criteria)
         }
      })
   })

   test('is sorted in ascending order for each header criterion', () => {
      const { productRows } =  renderProductsListComponent()
      const arrowsDown = screen.getAllByLabelText('arrow-down') 

      arrowsDown.forEach((arrow, i) => {
         const criteria = arrow.closest('div')?.textContent
         fireEvent.click(arrow)
         if (i !== 2) {
            const column = i > 2 ? i-1 : i   
            const order = getCurrentOrder(productRows, false, column)   

            expect(productRows).toBeSorted(order, 'asc', criteria)
         } else {
            const qtyElFirstRows = screen.getAllByRole('heading')
            const order = getCurrentOrder(qtyElFirstRows, true) 

            expect(productRows).toBeSorted(order, 'asc', criteria)
         }
      })
   })

   test('persists products editions after page reload', () => {
      const { productRows, removeBtn, loadListener } =  renderProductsListComponent()
      const qtyElLastRow = screen.getAllByRole("heading")[products_list.length - 1]
      const plusButtonLastRow = screen.getAllByLabelText("plus")[products_list.length - 1]

      expect(productRows).toHaveLength(products_list.length)

      fireEvent.click(removeBtn)
      expect(productRows).toHaveLength(products_list.length - 1)

      expect(qtyElLastRow.textContent).toBe("40")
      fireEvent.click(plusButtonLastRow)
      expect(qtyElLastRow.textContent).toBe("41")

      window.dispatchEvent(new Event('load'))
      expect(loadListener).toHaveBeenCalled()
      expect(productRows).toHaveLength(products_list.length - 1)

      expect(qtyElLastRow.textContent).toBe("41")
   })

   test('persists sorting order after page reload', () => {
      const { productRows, loadListener } =  renderProductsListComponent()
      const arrowUpId = screen.getAllByLabelText('arrow-up')[0]

      let order = getCurrentOrder(productRows, false, 0)
      expect(productRows).toBeSorted(order, 'asc', 'ID')

      fireEvent.click(arrowUpId)
      order = getCurrentOrder(productRows, false, 0)
      expect(productRows).toBeSorted(order, 'desc', 'ID')

      window.dispatchEvent(new Event('load'))
      expect(loadListener).toHaveBeenCalled()

      order = getCurrentOrder(productRows, false, 0)
      expect(productRows).toBeSorted(order, 'desc', 'ID')
   })

   // Testar drag and drop    
    
})