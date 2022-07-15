export const getAll = () => {
   let productsList_storage
   let list_ordering
   let unordered_list
   let error = false

   try {
      productsList_storage = JSON.parse(localStorage.getItem('products_list'))
      list_ordering = JSON.parse(localStorage.getItem('list_ordering'))
      unordered_list = JSON.parse(localStorage.getItem('unordered_list'))
   } catch (e) {
      productsList_storage = null
      list_ordering = null
      error = true
   }

   return { productsList_storage, list_ordering, unordered_list, error }
}