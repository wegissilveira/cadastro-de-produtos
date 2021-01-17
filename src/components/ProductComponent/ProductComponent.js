import React from 'react'

import classes from './ProductComponent.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ProductComponent = props => {

    return (
        
        <div className={classes.Products_list_container}>
            {
                props.products.map(product => {
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
                                        />
                                    <p>{product.qtde}</p>
                                    <FontAwesomeIcon 
                                        icon="plus" 
                                        color="rgb(126, 125, 125)" 
                                    />
                                </div>
                                <p>{product.valor}</p>
                                {/* <p>$1200,00</p> */}
                                <p>{(product.valor * product.qtde).toFixed(2)}</p>
                                <FontAwesomeIcon 
                                    icon={["far", "trash-alt"]} 
                                    color="red"  
                                    onClick={() => props.removeProduct(product.id)}  
                                />
                            </div>
                })
            }
            
        </div>
    )
}

export default ProductComponent