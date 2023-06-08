import { ProductsList } from 'common/types'

export const orderList = (
   productsData: ProductsList[], 
   order: Exclude<keyof ProductsList, 'isEmpty'>,  
   direction: string, 
   ul: boolean
) => {
   if (!productsData) {
      return []
   }

   const productsList = [...productsData]
   if (!ul) {
      if (direction === 'up') {
         order !== 'nome' ?
            productsList.sort((a, b) => b[order]! - a[order]!) :
            productsList.sort((a, b) => b[order]!.localeCompare(
               a[order]!,
               undefined,
               { numeric: true, sensitivity: 'base' }
            ))
      } else {
         order !== 'nome' ?
            productsList.sort((a, b) => a[order]! - b[order]!) :
            productsList.sort((a, b) => a[order]!.localeCompare(
               b[order]!,
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

// const list = [
//    {
//        id: 1,
//        nome: 'Produto 1',
//        qtde: 2,
//        valor: 10,
//        valorTotal: 20
//    },
//    {
//        id: 2,
//        nome: 'Produto 2',
//        qtde: 39,
//        valor: 10,
//        valorTotal: 390
//    },
//    {
//        id: 3,
//        nome: 'Produto 3',
//        qtde: 109,
//        valor: 20,
//        valorTotal: 2180
//    },
//    {
//        id: 4,
//        nome: 'Produto 4',
//        qtde: 50,
//        valor: 15,
//        valorTotal: 750
//    },
//    {
//        id: 5,
//        nome: 'Produto 5',
//        qtde: 499,
//        valor: 100,
//        valorTotal: 49000
//    },
//    {
//        id: 6,
//        nome: 'Produto 6',
//        qtde: 100,
//        valor: 10,
//        valorTotal: 1000
//    },
//    {
//        id: 7,
//        nome: 'Produto 7',
//        qtde: 5,
//        valor: 10,
//        valorTotal: 50
//    },
//    {
//        id: 8,
//        nome: 'Produto 8',
//        qtde: 40,
//        valor: 10,
//        valorTotal: 400
//    },
// ]

// const list = [
//    {
//        id: 1,
//        nome: 'Produto 1',
//        qtde: 2,
//        valor: 10,
//        valorTotal: 'R$ 20.00'
//    },
//    {
//        id: 2,
//        nome: 'Produto 2',
//        qtde: 39,
//        valor: 10,
//        valorTotal: 'R$ 390.00'
//    },
//    {
//        id: 3,
//        nome: 'Produto 3',
//        qtde: 109,
//        valor: 20,
//        valorTotal: 'R$ 2180.00'
//    },
//    {
//        id: 4,
//        nome: 'Produto 4',
//        qtde: 50,
//        valor: 15,
//        valorTotal: 'R$ 750.00'
//    },
//    {
//        id: 5,
//        nome: 'Produto 5',
//        qtde: 499,
//        valor: 100,
//        valorTotal: 'R$ 49000.00'
//    },
//    {
//        id: 6,
//        nome: 'Produto 6',
//        qtde: 100,
//        valor: 10,
//        valorTotal: 'R$ 1000.00'
//    },
//    {
//        id: 7,
//        nome: 'Produto 7',
//        qtde: 5,
//        valor: 10,
//        valorTotal: 'R$ 50.00'
//    },
//    {
//        id: 8,
//        nome: 'Produto 8',
//        qtde: 40,
//        valor: 10,
//        valorTotal: 'R$ 400.00'
//    },
// ]

// const orderList = (
//    productsData, 
//    order,  
//    direction
// ) => {
//    if (!productsData) {
//       return []
//    }

//    const productsList = [...productsData]
//       if (direction === 'up') {
//          order !== 'nome' ?
//             productsList.sort((a, b) => b[order] - a[order]) :
//             productsList.sort((a, b) => b[order].localeCompare(
//                a[order],
//                undefined,
//                { numeric: true, sensitivity: 'base' }
//             ))
//       } else {
//          order !== 'nome' ?
//             productsList.sort((a, b) => a[order] - b[order]) :
//             productsList.sort((a, b) => a[order].localeCompare(
//                b[order],
//                undefined,
//                { numeric: true, sensitivity: 'base' }
//             ))
//       }

//    return productsList
// }

// console.log(orderList(list, 'valorTotal', 'up'))