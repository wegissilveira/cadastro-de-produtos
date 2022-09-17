import classes from './ProductsListQtde.module.scss'

import useInitProducts from 'hooks/useInitProducts'

import { InitialState } from 'common/types'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from 'react-redux'


interface Props {
   qtde: number
   id: number
}

const ProductsListQtde = ({qtde, id}: Props) => {
   const productsDataState = useSelector((state: InitialState) => state.productsDataState)
   const { initProducts } = useInitProducts()

   const removeProductHandler = (id: number) => {
      const productsList =
         productsDataState.filter(product =>
            product.id !== id
         )

      initProducts('remove', productsList)
   }

   const updateQtdeHandler = (arg: string, id: number) => {
      let productsList = productsDataState.map(product => {
         return { ...product }
      })

      let localQty = 0

      productsList.forEach((product, i) => {
         if (product.id === id) {
            if (arg === 'up') {
               if (product.qtde && product.valor) {
                  productsList[i].qtde = product.qtde + 1
                  productsList[i].valorTotal = product.qtde * product.valor
               }
            }

            if (arg === 'down') {
               if (product.qtde && product.valor) {
                  productsList[i].qtde = product.qtde - 1
                  productsList[i].valorTotal = product.qtde * product.valor
               }               
            }

            localQty = productsList[i].qtde!
         }
      })

      if (localQty > 0) {
         initProducts('updQtde', productsList)
      } else {
         const remove = window.confirm('Quantidade deve ser maior que 0. \nO produto será excluído!')

         if (remove === true) removeProductHandler(id)
      }
   }

   return (
      <div className={classes.Product_change_qtde}>
         <FontAwesomeIcon
            icon="minus"
            color="rgb(126, 125, 125)"
            onClick={() => updateQtdeHandler('down', id)}
         />
         <p>{qtde}</p>
         <FontAwesomeIcon
            icon="plus"
            color="rgb(126, 125, 125)"
            onClick={() => updateQtdeHandler('up', id)}
         />
      </div>
   )
}

export default ProductsListQtde