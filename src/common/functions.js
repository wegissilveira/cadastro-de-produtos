export const orderList = (productsData, order, direction, ul) => {

   let productsList = productsData

   if (ul !== true) {
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