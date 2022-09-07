export const getProductsService = () => {
   let productsList_storage
   let list_ordering
   let unordered_list
   let error = false
   let errorMsg

   try {
      productsList_storage = JSON.parse(localStorage.getItem('products_list'))
      list_ordering = JSON.parse(localStorage.getItem('list_ordering'))
      unordered_list = JSON.parse(localStorage.getItem('unordered_list'))
   } catch (e) {
      productsList_storage = null
      list_ordering = null
      error = true
      errorMsg = errorMsg = ['red', 'Algo saiu errado!', 'Os produtos não foram carregados.']
   }

   return { productsList_storage, list_ordering, unordered_list, error, errorMsg }
}

export const setListOrderService = (order, ul) => {
   let error = false
   let errorMsg

   try {
      localStorage.setItem('list_ordering', JSON.stringify(order))
      localStorage.setItem('unordered_list', JSON.stringify(ul))
   } catch (e) {
      error = true
      errorMsg = ['red', 'Algo saiu errado!', 'Atualize a página e tente novamente.']
   }

   return { error, errorMsg }
}

export const postProductsService = (products, action) => {
   let errorMsg = ['', '']
   try {
      localStorage.setItem('products_list', JSON.stringify(products))
      action === 'remove' ?
         errorMsg = ['green', 'Produto removido com sucesso!', ''] :
         errorMsg = ['green', 'Produto inserido com sucesso!', '']
   } catch (e) {
      action === 'remove' ?
         errorMsg = ['red', 'Algo saiu errado!', 'O produto não foi removido.'] :
         errorMsg = ['red', 'Algo saiu errado!', 'O produto não foi inserido.']
   }

   return { errorMsg }
}