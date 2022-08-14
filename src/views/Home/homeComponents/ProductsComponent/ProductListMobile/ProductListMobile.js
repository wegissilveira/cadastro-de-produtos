import React, { useState, useEffect } from 'react'

import classes from './ProductListMobile.module.css'

import ProductsListMobileHeader from './ProductsListMobileHeader/ProductsListMobileHeader'
import ProductsListQtde from '../ProductsListQtde/ProductsListQtde'

import { useSelector } from 'react-redux'
import useInitProducts from 'hooks/useInitProducts'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ProductListMobile = props => {
   console.log('16- ProductListMobile');
   let [listOrderIcon, setListIcon] = useState()
   let [productsState, setProductsState] = useState(null)
   let [emptySearchState, setEmptySearch] = useState(null)

   const { listOrder, productsDataState, searchProducts } = useSelector(state => state)
   const { initProducts } = useInitProducts()

   const removeProductHandler = id => {
      const productsList =
         productsDataState.filter(product =>
            product.id !== id
         )

      initProducts('remove', productsList)
   }

   React.useEffect(() => {
      const orderBtnsContainer = document.getElementById('orderMobileContainer')

      if (orderBtnsContainer !== null) {
         Array.from(orderBtnsContainer.childNodes)
            .forEach(btn => {
               if (listOrder[1] === btn.id) {
                  btn.style.backgroundColor = 'green'
                  btn.style.color = 'white'
                  btn.style.border = '1px solid green'
               } else {
                  btn.style.backgroundColor = '#f1f1f8'
                  btn.style.color = 'rgb(126, 125, 125)'
                  btn.style.border = '1px solid #f1f1f8'
               }
            })

         let listIcon =
            <FontAwesomeIcon
               icon={listOrder[0] === 'up' ?
                  'sort-amount-up' :
                  'sort-amount-down-alt'
               }
               color="green"
            />

         setListIcon(listIcon)
      }
   }, [listOrder])

   useEffect(() => {
      const products = searchProducts.length > 0 ? searchProducts : productsDataState
      const emptySearch = products[0] === 'empty search' ? true : false
      setProductsState(products)
      setEmptySearch(emptySearch)
   }, [productsDataState, searchProducts])


   return (
      <div className={classes.Products_list_container_mobile}>
         <h3>Ordenar por: &nbsp;
            {listOrderIcon}
         </h3>
         <ProductsListMobileHeader />
         <div>
            {productsState && productsState.length > 0 && !emptySearchState ?
               productsState.map((product, index) => {
                  return <div 
                     key={product.id}
                     className={classes.Product_container_mobile}
                  >
                     <div className={classes.Product_subContainer_mobile}>
                        <div>
                           <p>ID: &nbsp;</p>
                           <span>{product.id}</span>
                        </div>
                        <div>
                           <p>Nome: &nbsp;</p>
                           <span>{product.nome}</span>
                        </div>
                        <div>
                           <p>Quantidade: &nbsp;</p>
                           <ProductsListQtde qtde={product.qtde} id={product.id} />
                        </div>
                        <div>
                           <p>Valor Unitário: &nbsp;</p>
                           <span>R$ {(product.valor).toFixed(2)}</span>
                        </div>
                        <div>
                           <p>Valor Total: &nbsp;</p>
                           <span>R$ {(product.valor * product.qtde).toFixed(2)}</span>
                        </div>
                     </div>
                     <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        color="red"
                        size="3x"
                        onClick={() => removeProductHandler(product.id)}
                     />
                  </div>
               }) :
               <h1 className={classes.Empty_list}>NENHUM PRODUTO CADASTRADO</h1>
            }
         </div>
      </div>
   )
}

export default ProductListMobile