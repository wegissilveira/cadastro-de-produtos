import classes from './ProductsListQtde.module.css'

import useInitProducts from 'hooks/useInitProducts'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from 'react-redux'

const ProductsListQtde = (props) => {
   const { productsDataState } = useSelector(state => state)
   const { initProducts } = useInitProducts()

   const removeProductHandler = id => {
      const productsList =
         productsDataState.filter(product =>
            product.id !== id
         )

      initProducts('remove', productsList)
   }

   const updateQtdeHandler = (arg, id) => {
      let productsList = productsDataState.map(product => {
         return { ...product }
      })

      let qtde = null

      productsList.forEach((product, i) => {
         if (product.id === id) {
            if (arg === 'up') {
               productsList[i].qtde = product.qtde + 1
               productsList[i].valorTotal = product.qtde * product.valor
            }

            if (arg === 'down') {
               productsList[i].qtde = product.qtde - 1
               productsList[i].valorTotal = product.qtde * product.valor
            }

            qtde = productsList[i].qtde
         }
      })

      if (qtde > 0) {
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
            onClick={() => updateQtdeHandler('down', props.id)}
         />
         <p>{props.qtde}</p>
         <FontAwesomeIcon
            icon="plus"
            color="rgb(126, 125, 125)"
            onClick={() => updateQtdeHandler('up', props.id)}
         />
      </div>
   )
}

export default ProductsListQtde