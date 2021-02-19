import React from 'react'

import classes from './ProductListMobile.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ProductListMobile = props => {
    
    let [listOrder, setListOrder] = React.useState()

    React.useEffect(() => {
        setListOrder(props.productsOrder)
    }, [props.productsOrder])

    const orderListHandler = (order, e) => {
        if (order === listOrder[1]) {
            setListOrder(listOrder[0] === 'up' ? 
                listOrder[0] = 'down' : 
                listOrder[0] = 'up'
            )
        } else {
            setListOrder(listOrder[0] = 'down')
        }

        props.orderList(order, listOrder[0], false)
    }

    const orderBtnsContainer = document.getElementById('orderMobileContainer')
    let orderListIcon

    if (orderBtnsContainer !== null) {
        Array.from(orderBtnsContainer.childNodes)
            .forEach(btn => {
                if (listOrder[1] === btn.id) {
                    btn.style.backgroundColor = 'green'
                    btn.style.color = 'white'
                    btn.style.border = '1px solid green'
                } else {
                    btn.style.backgroundColor = '#f1f1f8'
                    btn.style.color = 'rgb(126, 125, 125)'
                    btn.style.border = '1px solid #f1f1f8'
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
            <div id='orderMobileContainer' className={classes.Products_Order_list}>
                <p id='id' onClick={e => orderListHandler('id', e)}>ID</p>
                <p id='nome' onClick={e => orderListHandler('nome', e)} >Nome</p>
                <p id='qtde' onClick={e => orderListHandler('qtde', e)} >Quantidade</p>
                <p id='valor' onClick={e => orderListHandler('valor', e)} >Valor Unitário</p>
                <p id='valorTotal' onClick={e => orderListHandler('valorTotal', e)} >Valor Total</p>
            </div>

            <div>

            { props.products.length > 0 ?
                props.products.map(product => {
                    return <div key={product.id} 
                                className={classes.Product_container_mobile}
                            >
                                <div className={classes.Product_subContainer_mobile}>
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
                                        <span>R$ {(product.valor).toFixed(2)}</span>
                                    </div>
                                    <div>
                                        <p>Valor Total: &nbsp;</p>
                                        <span>R$ {(product.valor * product.qtde).toFixed(2)}</span>
                                    </div>
                                </div>
                                <FontAwesomeIcon 
                                    icon={["far", "trash-alt"]} 
                                    color="red"    
                                    size="3x"
                                    onClick={() => props.removeProduct(product.id)} 
                                />
                            </div>
                }) :
                <h1 className={classes.Empty_list}>NENHUM PRODUTO CADASTRADO</h1>
            }
            </div>
            
        </div>
    )
}

export default ProductListMobile