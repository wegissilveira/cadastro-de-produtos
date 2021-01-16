const productsDataFn = () => {

    let productsData = []
    const productsList_storage = JSON.parse(localStorage.getItem('products_list'))

    if (productsList_storage !== null) {
        productsData = productsList_storage
    }
    
    return productsData

}

export default productsDataFn