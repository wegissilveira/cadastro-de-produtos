import { useState, useEffect } from 'react'

import classes from './ProductsListMobileHeader.module.css'

import { productsListHeaderItems } from 'helpers/items'
import useSetOrder from 'hooks/useSetOrder'

import { useSelector } from 'react-redux'


const ProductsListMobileHeader = () => {
   const [listOrderState, setListOrder] = useState()

   const listOrder= useSelector(state => state.listOrder)

   const { setOrder } = useSetOrder()

   const orderListHandler = (order, e) => {
      if (order === listOrderState[1]) {
         setListOrder(listOrderState[0] === 'up' ?
            listOrderState[0] = 'down' :
            listOrderState[0] = 'up'
         )
      } else {
         setListOrder(listOrderState[0] = 'down')
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
               return <p key={`${item}-${i}`} id={item.id} onClick={e => orderListHandler(item.id, e)}>{item.text}</p>
            })
         }
      </div>
   )
}

export default ProductsListMobileHeader