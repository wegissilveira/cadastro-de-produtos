import { render, screen } from "@testing-library/react"
import { toHaveClass } from "@testing-library/jest-dom/matchers"
import '@testing-library/jest-dom'

import { store, Provider } from "test-setup"
import { productsListHeaderItems } from "helpers/items"
import ProductsListHeader from "./ProductsListHeader"

const renderHeaderComponent = () => {
   const { container } = render(
      <Provider store={store}>
         <ProductsListHeader />
      </Provider>
   )

   const headerColumns = container.querySelector('#orderContainer')

   return { container, headerColumns }
}

describe('all header options', () => {
   const { container, headerColumns } = renderHeaderComponent()
   
   test('are in the document', () => {
      const columnsQty = Number(productsListHeaderItems.length)
      const headerColumnsQty = headerColumns?.childElementCount

      expect(headerColumnsQty).toBe(columnsQty)
   })

   test('have the expected titles', () => {
      const headerTitles = Array.from(headerColumns!.getElementsByTagName('p'))
      
      headerTitles?.forEach((title, i) => {
         const titleText = title.textContent
         const headerListText = productsListHeaderItems[i].text
         expect(headerListText).toEqual(titleText)
      })
   })

   test('each one has an up sort arrow on its left and a down sort arrow its right on desk version', () => {      
      const headerColumnsDivs = headerColumns?.childNodes
      
      headerColumnsDivs?.forEach(column => {
         const columnArrow = column.childNodes
         const arrowUp = columnArrow[0]
         const arrowDown = columnArrow[2]

         expect(arrowUp).toHaveClass('svg-inline--fa fa-arrow-up-wide-short')
         expect(arrowDown).toHaveClass('svg-inline--fa fa-arrow-down-short-wide')
      })
   })
})