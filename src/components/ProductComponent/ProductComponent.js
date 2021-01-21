import React, { Fragment } from 'react'

import classes from './ProductComponent.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ProductComponent = props => {


    let products = []

    props.products.forEach(item => {
        const searchKey = new RegExp(props.searchValue, 'gi')

        if (props.searchOn) {
            if (item.nome.match(searchKey)) {
                products.push(item)
            }
        } else {
            products.push(item)
        }
    })


    return (
        <Fragment>
            <div className={classes.FormOutput_header}>
                <div>
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={() => props.orderList('id', 'up')}
                    />
                    <p>ID</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={() => props.orderList('id', 'down')}
                    />
                </div>
                <div>
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={() => props.orderList('nome', 'up')}
                    />
                    <p>Nome</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={() => props.orderList('nome', 'down')}
                    />
                </div>
                <div>
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={() => props.orderList('qtde', 'up')}
                    />
                    <p>Quantidade</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={() => props.orderList('qtde', 'down')}
                    />
                </div>
                <div>
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={() => props.orderList('valor', 'up')}
                    />
                    <p>Valor Unitário</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={() => props.orderList('valor', 'down')}
                    />
                </div>
                <div>
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={() => props.orderList('valorTotal', 'up')}
                    />
                    <p>Valor Total</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={() => props.orderList('valorTotal', 'down')}
                    />
                </div>
                <p></p>
            </div>

            <div className={classes.Products_list_container}>
                {
                    products.map(product => {
                        return <div 
                                    key={product.id}
                                    className={classes.Product_container}
                                >
                                    <p>{product.id}</p>
                                    <p>{product.nome}</p>
                                    <div className={classes.Product_change_qtde}>
                                        <FontAwesomeIcon 
                                            icon="minus"
                                            color="rgb(126, 125, 125)" 
                                            onClick={() => props.updateProduct('down', product.id)}
                                        />
                                        <p>{product.qtde}</p>
                                        <FontAwesomeIcon 
                                            icon="plus" 
                                            color="rgb(126, 125, 125)" 
                                            onClick={() => props.updateProduct('up', product.id)}
                                        />
                                    </div>
                                    <p>{product.valor}</p>
                                    <p>{(product.qtde * product.valor).toFixed(2)}</p>
                                    <FontAwesomeIcon 
                                        icon={["far", "trash-alt"]} 
                                        color="red"  
                                        onClick={() => props.removeProduct(product.id)}  
                                    />
                                </div>
                    })
                }
                
            </div>
        </Fragment>
    )
}

export default ProductComponent