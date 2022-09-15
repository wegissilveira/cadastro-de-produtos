import React, { Fragment } from 'react'

import classes from './ProductsList.module.scss'

import ProductsListHeader from './ProductsListHeader/ProductsListHeader'
import ProductsListQtde from '../ProductsListQtde/ProductsListQtde'

import useSetOrder from 'hooks/useSetOrder'
import useInitProducts from 'hooks/useInitProducts'
import { InitialState, ProductsList } from 'common/types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from 'react-redux'


type DivWithPosition = HTMLDivElement & { yPos: number }

const ProductsListComponent = () => {
   const [order, setOrderState] = React.useState('')
   const [productsState, setProductsState] = React.useState<ProductsList[] | null>(null)
   const [emptySearchState, setEmptySearch] = React.useState(false)

   const { productsDataState, listOrder, searchProducts } = useSelector((state: InitialState) => state)
   
   const { setOrder } = useSetOrder()
   const { initProducts } = useInitProducts()

   /* *Configuração Drag and drop* */
   let currentNode: HTMLDivElement
   const editDraggableItem = (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.backgroundColor = 'rgb(139, 207, 38)'
      currentNode = e.currentTarget
   }

   let currentIndex: number
   let currentId: string
   let selectedNodePos = 0

   const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, id: number, idx: number) => {
      currentIndex = idx
      currentId = id+''
      e.dataTransfer.setData('id', currentId)
   }

   const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
      let parent = e.currentTarget
      e.preventDefault()

      whereAmI(e.clientY, parent)
   }

   const resetNodes = (nodes: HTMLDivElement) => {
      for (let i = 0; i < nodes.children.length; i++) {
         document.getElementById(nodes.children[i]['id'])!.style.marginTop = '20px'
      }
   }
   
   const whereAmI = (currentYPos: number, nodes: HTMLDivElement) => {
      establishNodePositions(nodes)

      //identifica o nó logo acima do nó selecionado
      let nodeAbove
      let nodeBelow
      for (let i = 0; i < nodes.children.length; i++) {
         const el = nodes.children[i]
         const elWithPosition = el as DivWithPosition

         if (elWithPosition.yPos < currentYPos) {
            selectedNodePos = i + 1
            nodeAbove = document.getElementById(nodes.children[i]['id'])
         } else {
            //Node inserido abaixo do selecionado
            if (!nodeBelow) {
               nodeBelow = document.getElementById(nodes.children[i]['id'])
            }
         }
      }

      if (typeof nodeAbove === 'undefined') {
         selectedNodePos = 0
      }

      resetNodes(nodes)

      if (typeof nodeBelow === 'object') {
         if (nodeBelow) {
            nodeBelow.style.marginTop = '3em'
            nodeBelow.style.transition = '1.8s'
         }
      }
   }

   const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
      let parent = e.currentTarget
      parent.insertBefore(currentNode, parent.children[selectedNodePos])

      resetNodes(parent)

      removeBg()
      let newProducts = productsDataState.map(item => {
         return { ...item }
      })

      let products = newProducts.filter((item, i) => item.id !== Number(currentId))
      products.splice(
         currentIndex < selectedNodePos ?
            selectedNodePos - 1 :
            selectedNodePos,
         0, newProducts[currentIndex]
      )
      
      setOrder([null, null], true, products)
   }

   const establishNodePositions = (nodes: HTMLDivElement) => {
      for (let i = 0; i < nodes.children.length; i++) {
         const el = nodes.children[i]
         const elWithPosition = el as DivWithPosition
         const element = document.getElementById(nodes.children[i]['id'])
         const position = element!.getBoundingClientRect()
         const yTop = position.top
         const yBottom = position.bottom
         const yCenter = yTop + ((yBottom - yTop) / 2)

         elWithPosition.yPos = yCenter
      }
   }

   const removeBg = () => {
      setTimeout(() => {
         currentNode.style.backgroundColor = 'transparent'
         currentNode.style.transition = '1s'
      }, 200)
   }

   const removeProductHandler = (id: number) => {
      const productsList =
         productsDataState.filter(product =>
            product.id !== id
         )

      initProducts('remove', productsList)
   }


   React.useEffect(() => {
      setOrderState(listOrder[0])
   }, [listOrder])

   React.useEffect(() => {
      const orderHeaderContainer = document.getElementById('orderContainer')
      const icons = orderHeaderContainer!.getElementsByTagName('svg')

      Array.from(icons).forEach(icon => {
         icon.style.color = 'rgb(126, 125, 125)'

         if (icon.classList[1].match(order) && icon.parentElement!.id === listOrder[1]) {
            icon.style.color = 'green'
         }
      })
   })

   React.useEffect(() => {
      const products = searchProducts.length > 0 ? searchProducts : productsDataState
      const emptySearch = products.length > 0 && products[0].isEmpty ? true : false
      setProductsState(products)
      setEmptySearch(emptySearch)
   }, [productsDataState, searchProducts])

   
   return (
      <Fragment>
         <ProductsListHeader />
         <div
            className={classes.Products_list_container}
            onDragOver={e => dragOverHandler(e)}
            onDragEnd={e => dropHandler(e)}
         >
            {productsState && productsState.length > 0 && !emptySearchState ?
               productsState.map((product, index) => {
                  return <div
                     key={product.id}
                     className={classes.Product_container}
                     id={index+''}
                     draggable
                     onDragStart={e => dragStartHandler(e, product.id!, index)}
                     onMouseDown={e => editDraggableItem(e)}
                     onClick={removeBg}
                  >
                     <p>{product.id}</p>
                     <p>{product.nome}</p>
                     <ProductsListQtde qtde={product.qtde!} id={product.id!} />
                     <p>R$ {(product.valor!).toFixed(2)}</p>
                     <p onDragStart={e => dragStartHandler(e, product.id!, index)} >R$ {(product.qtde! * product.valor!).toFixed(2)}</p>
                     <FontAwesomeIcon
                        icon={["far", "trash-alt"]}
                        color="red"
                        onClick={() => removeProductHandler(product.id!)}
                     />
                  </div>
               }) :
               <h1 className={classes.Empty_list}>NENHUM PRODUTO CADASTRADO</h1>
            }

         </div>
      </Fragment>
   )
}

export default ProductsListComponent