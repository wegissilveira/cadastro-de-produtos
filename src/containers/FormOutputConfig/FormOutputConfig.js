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
                    <p>Quantidade</p>
                    <p>Valor Unitário</p>
                    <p>Valor Total</p>
                    <p></p>
                </div>
                <div className={classes.Products_list_container}>
                    <div className={classes.Product_container}>
                        <p>1</p>
                        <p>Nome Teste</p>
                        <div className={classes.Product_change_qtde}>
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
                        <div className={classes.Product_change_qtde}>
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
                        <p>$12,00</p>
                        <p>$1200,00</p>
                        {/* <p>X</p> */}
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                        />
                    </div>
                </div>
                <div className={classes.Products_list_container_mobile}>
                    <h3>Ordenar por:</h3>
                    <div>
                        <p>ID</p>
                        <p>Nome</p>
                        <p>Quantidade</p>
                        <p>Valor Unitário</p>
                        <p>Valor Total</p>
                    </div>
                    <div>
                        <div className={classes.Product_container_mobile}>
                            <div>
                                <p>ID: &nbsp;</p>
                                <span>1</span>
                            </div>
                            <div>
                                <p>Nome: &nbsp;</p>
                                <span>Nome Teste</span>
                            </div>
                            <div>
                                <p>Quantidade: &nbsp;</p>
                                <div className={classes.Product_change_qtde}>
                                    <FontAwesomeIcon 
                                        icon="minus"
                                        color="rgb(126, 125, 125)" 
                                        />
                                    <span>100</span>
                                    <FontAwesomeIcon 
                                        icon="plus" 
                                        color="rgb(126, 125, 125)" 
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Valor Unitário: &nbsp;</p>
                                <span> 12</span>
                            </div>
                            <div>
                                <p>Valor Total: &nbsp;</p>
                                <span>1200</span>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                            size="3x"
                        />
                    </div>
                    <div>
                        <div className={classes.Product_container_mobile}>
                            <div>
                                <p>ID: &nbsp;</p>
                                <span>1</span>
                            </div>
                            <div>
                                <p>Nome: &nbsp;</p>
                                <span>Nome Teste</span>
                            </div>
                            <div>
                                <p>Quantidade: &nbsp;</p>
                                <div className={classes.Product_change_qtde}>
                                    <FontAwesomeIcon 
                                        icon="minus"
                                        color="rgb(126, 125, 125)" 
                                        />
                                    <span>100</span>
                                    <FontAwesomeIcon 
                                        icon="plus" 
                                        color="rgb(126, 125, 125)" 
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Valor Unitário: &nbsp;</p>
                                <span> 12</span>
                            </div>
                            <div>
                                <p>Valor Total: &nbsp;</p>
                                <span>1200</span>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                            size="3x"
                        />
                    </div>
                    <div>
                        <div className={classes.Product_container_mobile}>
                            <div>
                                <p>ID: &nbsp;</p>
                                <span>1</span>
                            </div>
                            <div>
                                <p>Nome: &nbsp;</p>
                                <span>Nome Teste</span>
                            </div>
                            <div>
                                <p>Quantidade: &nbsp;</p>
                                <div className={classes.Product_change_qtde}>
                                    <FontAwesomeIcon 
                                        icon="minus"
                                        color="rgb(126, 125, 125)" 
                                        />
                                    <span>100</span>
                                    <FontAwesomeIcon 
                                        icon="plus" 
                                        color="rgb(126, 125, 125)" 
                                    />
                                </div>
                            </div>
                            <div>
                                <p>Valor Unitário: &nbsp;</p>
                                <span> 12</span>
                            </div>
                            <div>
                                <p>Valor Total: &nbsp;</p>
                                <span>1200</span>
                            </div>
                        </div>
                        <FontAwesomeIcon 
                            icon={["far", "trash-alt"]} 
                            color="red"    
                            size="3x"
                        />
                    </div>
                </div>
                <div className={classes.Open_modal_button}>
                    <FontAwesomeIcon 
                        icon="plus" 
                        color="#fff" 
                        size="2x"
                    />
                </div>
            </div>
        )
    }
}

export default FormOutputConfig