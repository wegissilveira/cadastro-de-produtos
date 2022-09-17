import React, { memo } from 'react'

import classes from './ProductsListHeader.module.scss'

import { productsListHeaderItems } from 'helpers/items'
import useSetOrder from 'hooks/useSetOrder'

import { ProductKeys } from 'common/types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProductsListHeader = () => {
   const { setOrder } = useSetOrder()

   const orderListHandler = (order: ProductKeys, direction: string, e: React.MouseEvent<SVGSVGElement>) => {
      setOrder([direction, order], false)
      const arrowOrder = e.currentTarget
      
      Array.from(arrowOrder.parentNode!.parentNode!.children)
         .forEach(item => {
            Array.from(item.children)
               .forEach(subItem => {
                  const el = subItem as HTMLElement
                  if (el.tagName) {
                     el.style.color = 'rgb(126, 125, 125)'
                  }
               })
         })

      arrowOrder.style.color = 'green'
   }


   return (
      <div
      id='orderContainer'
      className={classes.FormOutput_header}
      >
         {
            productsListHeaderItems.map((item, i) => {
               return (
                  <div id={item.id} key={`${item}-${i}`}>
                     <FontAwesomeIcon
                        icon="sort-amount-up"
                        onClick={e => orderListHandler(item.id, 'up', e)}
                     />
                     <p>{item.text}</p>
                     <FontAwesomeIcon
                        icon="sort-amount-down-alt"
                        onClick={e => orderListHandler(item.id, 'down', e)}
                     />
                  </div>
               )
            })
         }
         <p></p>
      </div>
   )
}

export default memo(ProductsListHeader)