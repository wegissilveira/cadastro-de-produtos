import { render, fireEvent } from "@testing-library/react"
import '@testing-library/jest-dom'

import { store, Provider } from "test-setup"
import { productsListHeaderItems } from "helpers/items"
import ProductsListHeader from "./ProductsListHeader"


const renderHeaderComponent = () => {
   const { container } = render(
      <Provider store={store}>
         <ProductsListHeader order="" />
      </Provider>
   )

   const headerColumns = container.querySelector('#orderContainer')

   return { container, headerColumns }
}

describe('all header options', () => {
   const { headerColumns } = renderHeaderComponent()
   
   test('are in the document', () => {
      const columnsQty = Number(productsListHeaderItems.length)
      const headerColumnsQty = headerColumns?.childElementCount

      expect(headerColumnsQty).toBe(columnsQty)
   })

   test('have the expected titles', () => {
      const headerTitles = Array.from(headerColumns!.getElementsByTagName('p')) 
      for (let i=0; i < headerTitles.length; i+=1) {
         const titleText = headerTitles[i].textContent
         const headerListText = productsListHeaderItems[i].text
         expect(titleText).toEqual(headerListText)
      }
   })    

   test('each one has an up sort arrow on its left and a down sort arrow its right on desk version', () => {      
      const headerColumnsDivs = headerColumns?.childNodes
      if (headerColumnsDivs) {
         for (let i=0; i < headerColumnsDivs?.length; i+=1) {
            const columnArrow = headerColumnsDivs[i].childNodes
            const arrowUp = columnArrow[0]
            const arrowDown = columnArrow[2]
   
            expect(arrowUp).toHaveClass('svg-inline--fa fa-arrow-up-wide-short')
            expect(arrowDown).toHaveClass('svg-inline--fa fa-arrow-down-short-wide')
         }
      }
   })
})

describe('sort arrows', () => {
   test('all arrows but the clicked one is grey after click', async () => {
      const { container } = renderHeaderComponent()
      const allArrows = container.querySelectorAll('.svg-inline--fa')
      const firstArrow = allArrows[0]
      let firstArrowColor = (allArrows[0] as HTMLElement).style.color
      
      expect(firstArrowColor).toEqual('rgb(126, 125, 125)')

      fireEvent.click(firstArrow)  
      
      for (let i = 0; i < allArrows.length; i+=1) {
         const currentArrowColor = (allArrows[i] as HTMLElement).style.color
         const expectColor = i === 0 ? 'green' : 'rgb(126, 125, 125)'
         expect(currentArrowColor).toEqual(expectColor)
      }
   })
})