import React, { useState, useEffect } from 'react'

import classes from './ProductListMobile.module.scss'

import ProductsListMobileHeader from './ProductsListMobileHeader/ProductsListMobileHeader'
import ProductsListQtde from '../ProductsListQtde/ProductsListQtde'

import { InitialState, ProductsList } from 'common/types'

import { useSelector } from 'react-redux'
import useInitProducts from 'hooks/useInitProducts'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ProductListMobile = () => {
   const [listOrderIcon, setListIcon] = useState<JSX.Element>()
   const [productsState, setProductsState] = useState<ProductsList[] | null>(null)
   const [emptySearchState, setEmptySearch] = useState<boolean | null>(null)

   const productsDataState = useSelector((state: InitialState) => state.productsDataState)   
   const listOrder = useSelector((state: InitialState) => state.listOrder)   
   const searchProducts = useSelector((state: InitialState) => state.searchProducts) 
   
   const { initProducts } = useInitProducts()

   const removeProductHandler = (id: number) => {
      const productsList =
         productsDataState.filter((product: ProductsList) =>
            product.id !== id
         )

      initProducts('remove', productsList)
   }

   React.useEffect(() => {
      const orderBtnsContainer = document.getElementById('orderMobileContainer')

      if (orderBtnsContainer !== null) {
         Array.from(orderBtnsContainer.childNodes)
            .forEach(btn => {
               if (listOrder[1] === (btn as HTMLInputElement).id) {
                  (btn as HTMLInputElement).style.backgroundColor = 'green';
                  (btn as HTMLInputElement).style.color = 'white';
                  (btn as HTMLInputElement).style.border = '1px solid green'
               } else {
                  (btn as HTMLInputElement).style.backgroundColor = '#f1f1f8';
                  (btn as HTMLInputElement).style.color = 'rgb(126, 125, 125)';
                  (btn as HTMLInputElement).style.border = '1px solid #f1f1f8'
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
               productsState.map(product => {
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
                           <ProductsListQtde qtde={product.qtde!} id={product.id!} />
                        </div>
                        <div>
                           <p>Valor Unitário: &nbsp;</p>
                           <span>R$ {(product.valor!).toFixed(2)}</span>
                        </div>
                        <div>
                           <p>Valor Total: &nbsp;</p>
                           <span>R$ {(product.valor! * product.qtde!).toFixed(2)}</span>
                        </div>
                     </div>
                     <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        color="red"
                        size="3x"
                        onClick={() => removeProductHandler(product.id!)}
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