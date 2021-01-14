import React from 'react'

import classes from './ProductComponentMobile.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ProductComponentMobile = props => {

    return (
        <div className={classes.Products_list_container_mobile}>
            <h3>Ordenar por:</h3>
            <div>
                <p>ID</p>
                <p>Nome</p>
                <p>Quantidade</p>
                <p>Valor Unitário</p>
                <p>Valor Total</p>
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
                                                />
                                            <span>{product.qtde}</span>
                                            <FontAwesomeIcon 
                                                icon="plus" 
                                                color="rgb(126, 125, 125)" 
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
                                />
                            </div>
                })
            }
            
            
        </div>
    )
}

export default ProductComponentMobile