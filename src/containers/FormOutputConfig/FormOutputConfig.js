import React, { Component } from 'react'

import classes from './FormOutputConfig.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


class FormOutputConfig extends Component {
    render () {
        return (
            <div className={classes.FormOutput_container}>
                <div>
                    <h2>Lista De Produtos</h2>
                </div>
                <div className={classes.Search_container}>
                    <FontAwesomeIcon 
                        icon="search" 
                        color="rgb(126, 125, 125)"
                    />
                    <input placeholder="Busca por produtos" />
                </div>
                <div className={classes.FormOutput_header}>
                    <p>ID</p>
                    <p>Nome</p>
                    <p></p>
                    <p>Quantidade</p>
                    <p>Valor Unitário</p>
                    <p>Valor Total</p>
                    <p></p>
                </div>
                <div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                 color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                    <div className={classes.Product_container}>
                        <p>2</p>
                        <p>Nome Teste</p>
                        <div>
                            <FontAwesomeIcon 
                                icon="minus"
                                color="rgb(126, 125, 125)" 
                                />
                            <p>100</p>
                            <FontAwesomeIcon 
                                icon="plus" 
                                color="rgb(126, 125, 125)" 
                            />
                        </div>
                        <p>100</p>
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FormOutputConfig