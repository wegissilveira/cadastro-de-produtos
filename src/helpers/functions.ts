import { ProductsList } from 'common/types'

export const orderList = (productsData: ProductsList[], order: string | null, direction: string | null, ul:boolean) => {
   let productsList = productsData

   if (!ul) {
      if (direction === 'up') {
         order !== 'nome' ?
            productsList.sort((a, b) => b[order] - a[order]) :
            productsList.sort((a, b) => b[order].localeCompare(
               a[order],
               undefined,
               { numeric: true, sensitivity: 'base' }
            ))
      } else {
         order !== 'nome' ?
            productsList.sort((a, b) => a[order] - b[order]) :
            productsList.sort((a, b) => a[order].localeCompare(
               b[order],
               undefined,
               { numeric: true, sensitivity: 'base' }
            ))
      }
   }

   return productsList
}

export const toggleMobileForm = () => {
   const formInput_El = document.getElementById('responsive_form')
   const formInputStyle = formInput_El!.style

   if (formInputStyle.display === 'block') {
      formInputStyle.display = 'none'
   } else {
      formInputStyle.display = 'block'
   }
}