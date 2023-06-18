import { render, screen, fireEvent } from "@testing-library/react"

import ProductsListMobileHeader from "./ProductsListMobileHeader"
import { store, Provider } from "test-setup"
import { productsListHeaderItems } from "helpers/items"

const renderMobileHeader = () => {
   const { container } = render(
      <Provider store={store}>
         <ProductsListMobileHeader />
      </Provider>
   )

   const headerColumns = container.querySelector('#orderMobileContainer')

   return { container, headerColumns }
}

describe('all header options', () => {
   test('should be in the document', () => {
      const { headerColumns } = renderMobileHeader()

      const columnsQty = Number(productsListHeaderItems.length)
      const headerColumnsQty = headerColumns?.childElementCount

      expect(headerColumnsQty).toBe(columnsQty)
   })
})