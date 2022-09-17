import { useState, useEffect } from 'react'

import classes from './ProductsListMobileHeader.module.scss'

import { InitialState, ProductKeys } from 'common/types'

import { productsListHeaderItems } from 'helpers/items'
import useSetOrder from 'hooks/useSetOrder'

import { useSelector } from 'react-redux'


const ProductsListMobileHeader = () => {
   const [listOrderState, setListOrder] = useState<string[]>([''])

   const listOrder = useSelector((state: InitialState) => state.listOrder)

   const { setOrder } = useSetOrder()

   const orderListHandler = (e: React.MouseEvent<HTMLParagraphElement>, order: ProductKeys) => {
      const orderArr = [...listOrderState]
      if (order === orderArr[1]) {
         orderArr[0] === 'up' ?
            orderArr[0] = 'down' :
            orderArr[0] = 'up'
         
         setListOrder(orderArr)
      } else {
         orderArr[0] = 'down'
         setListOrder(orderArr)
      }

      setOrder([listOrderState[0], order], false)
   }

   useEffect(() => {
      setListOrder(listOrder)
   }, [listOrder])


   return (
      <div id='orderMobileContainer' className={classes.Products_Order_list}>
         {
            productsListHeaderItems.map((item, i) => {
               return <p key={`${item}-${i}`} id={item.id} onClick={e => orderListHandler(e, item.id)}>{item.text}</p>
            })
         }
      </div>
   )
}

export default ProductsListMobileHeader