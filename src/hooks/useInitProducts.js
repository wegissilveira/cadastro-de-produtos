import { useActions } from "./useActions"
import useSetOrder from 'hooks/useSetOrder'

import productsSeed from 'data/products_seed'
import { orderList } from "common/functions"
import { getAll } from 'services/requests'


// let errorMsg = ['', '']
const useInitProducts = () => {
   const { getProducts, setToastify } = useActions()
   // console.log('USE SET INIT 1')
   const { setOrder } = useSetOrder()
   // console.log('USE SET INIT 2')
   const { productsList_storage, list_ordering, unordered_list, error } = getAll()

   const initProducts = origin => {
      let productsData = []

      // let productsList_storage
      // let list_ordering
      // let unordered_list
      // let error = false

      // try {
      //    productsList_storage = JSON.parse(localStorage.getItem('products_list'))
      //    list_ordering = JSON.parse(localStorage.getItem('list_ordering'))
      //    unordered_list = JSON.parse(localStorage.getItem('unordered_list'))
      // } catch (e) {
      //    productsList_storage = null
      //    list_ordering = null
      //    error = true

      //    if (errorMsg[1] === '') {
      //       errorMsg = ['red', 'Algo saiu errado!', 'Os produtos não foram carregados.']
      //    }
      // }

      // Atribui a lista de produtos do storage a variável local productsData, me caso do storage não ser null
      if (productsList_storage !== null) {
         productsData = productsList_storage
      }

      // Reorganiza a ordenação em caso de 'origin' não ser de comando para atualizar a quantidade
      if (list_ordering !== null && origin !== 'updQtde') {
         productsData = orderList(productsData, list_ordering[1], list_ordering[0], unordered_list)
      }

      // Em caso de ocorrer algum erro no fetch dos produtos, a action 'setToastify' é executada alertando o usuário de que houve um erro na requisição.
      if (origin !== 'updQtde' && origin !== 'updOrder') {
         if (origin !== 'load' || error === true) {
            const errorMsg = ['red', 'Algo saiu errado!', 'Os produtos não foram carregados.']
            setToastify(errorMsg)
         }
      }

      // Se no load o storage estiver vazio, setOrder é chamado recebendo a lista do seed e executa o 'postProducts'
      // que insere os elementos no storage e chama initProducts novamente.
      // Caso contrário é executada a action 'getProducts', que insere a lista d eitens na state global do redux, assim como a ordem da lista
      if (list_ordering === null && productsList_storage === null) {
         console.log('SET ORDER')
         setOrder(['down', 'id'], true, productsSeed)
      } else {
         console.log('GET PRODUCTS')
         getProducts(productsData, list_ordering)
      }
   }

   return { initProducts }
}

export default useInitProducts