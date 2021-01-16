// const productsData = [
//     {
//         id: 1,
//         nome: 'Produto 1',
//         qtde: 10,
//         valor: 12.00
//     },
//     {
//         id: 2,
//         nome: 'Produto 2',
//         qtde: 100,
//         valor: 12.00
//     },
//     {
//         id: 3,
//         nome: 'Produto 3',
//         qtde: 90,
//         valor: 13.00
//     },
//     {
//         id: 4,
//         nome: 'Produto 4',
//         qtde: 100,
//         valor: 12.00
//     },
//     {
//         id: 5,
//         nome: 'Produto 5',
//         qtde: 80,
//         valor: 12.50
//     },
// ]

// export default productsData

const productsDataFn = () => {

    let productsData = []
    const productsList_storage = JSON.parse(localStorage.getItem('products_list'))

    if (productsList_storage !== null) {
        productsData = productsList_storage
    }
    
    return productsData

}

export default productsDataFn