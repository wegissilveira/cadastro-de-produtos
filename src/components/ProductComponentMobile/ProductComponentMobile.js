import React from 'react'

import classes from './ProductComponentMobile.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ProductComponentMobile = props => {
    
    let [listOrder, setListOrder] = React.useState()

    React.useEffect(() => {
        setListOrder(props.productsOrder)
    }, [props.productsOrder])

    const orderListHandler = (order, e) => {
        setListOrder(listOrder[0] === 'up' ? listOrder[0] = 'down' : listOrder[0] = 'up')
        props.orderList(order, listOrder[0], false)

        let arrowOrder = e.currentTarget
        Array.from(arrowOrder.parentNode.children)
            .forEach(item => {
                item.style.backgroundColor = '#f1f1f8'
                item.style.color = 'rgb(126, 125, 125)'
            })

        arrowOrder.style.backgroundColor = 'green'
        arrowOrder.style.color = 'white'
    }

    const orderBtnsContainer = document.getElementById('orderContainer')
    let orderListIcon

    if (orderBtnsContainer !== null) {
        Array.from(orderBtnsContainer.childNodes)
            .forEach(btn => {
                if (listOrder[1] === btn.id) {
                    btn.style.backgroundColor = 'green'
                    btn.style.color = 'white'
                }
            })

        orderListIcon = 
            <FontAwesomeIcon 
                icon={listOrder[0] === 'up' ? 
                    'sort-amount-up' : 
                    'sort-amount-down-alt'
                }
                color="green"
            />
    }

    return (
        <div className={classes.Products_list_container_mobile}>
            <h3>Ordenar por: &nbsp;
                {orderListIcon}
            </h3>
            <div id='orderContainer'>
                <p id='id' onClick={e => orderListHandler('id', e)}>ID</p>
                <p id='nome' onClick={e => orderListHandler('nome', e)} >Nome</p>
                <p id='qtde' onClick={e => orderListHandler('qtde', e)} >Quantidade</p>
                <p id='valor' onClick={e => orderListHandler('valor', e)} >Valor Unitário</p>
                <p id='valorTotal' onClick={e => orderListHandler('valorTotal', e)} >Valor Total</p>
            </div>

            {
                props.products.map(product => {
                    return <div key={product.id}>
                                <div className={classes.Product_container_mobile}>
                                    <div>
                                        <p>ID: &nbsp;</p>
                                        <span>{product.id}</span>
                                    </div>
                                    <div>
                                        <p>Nome: &nbsp;</p>
                                        <span>{product.nome}</span>
                                    </div>
                                    <div>
                                        <p>Quantidade: &nbsp;</p>
                                        <div className={classes.Product_change_qtde}>
                                            <FontAwesomeIcon 
                                                icon="minus"
                                                color="rgb(126, 125, 125)" 
                                                onClick={() => props.updateProduct('down', product.id)}
                                            />
                                            <span>{product.qtde}</span>
                                            <FontAwesomeIcon 
                                                icon="plus" 
                                                color="rgb(126, 125, 125)" 
                                                onClick={() => props.updateProduct('up', product.id)}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p>Valor Unitário: &nbsp;</p>
                                        <span>{product.valor}</span>
                                    </div>
                                    <div>
                                        <p>Valor Total: &nbsp;</p>
                                        <span>{(product.valor * product.qtde).toFixed(2)}</span>
                                    </div>
                                </div>
                                <FontAwesomeIcon 
                                    icon={["far", "trash-alt"]} 
                                    color="red"    
                                    size="3x"
                                    onClick={() => props.removeProduct(product.id)} 
                                />
                            </div>
                })
            }
            
            
        </div>
    )
}

export default ProductComponentMobile