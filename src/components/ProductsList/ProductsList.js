import React, { Fragment } from 'react'

import classes from './ProductsList.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProductsList = props => {

    /* *Drag and drop logic* */
    let currentNode 
    const editDraggableItem = e => {
        e.currentTarget.style.backgroundColor = 'tomato'
        currentNode = e.currentTarget
    }

    let currentIndex
    let currentId
    let selectedNodePos = 0
    // let currentNode 

    const dragStartHandler = (e, id, idx) => {
        currentIndex = idx
        currentId = id
        // currentNode = e.currentTarget
        e.dataTransfer.setData('id', id)
    }

    const dragOverHandler = e => {
        let parent = e.currentTarget
        e.preventDefault()

        whereAmI(e.clientY, parent)
    }

    const resetNodes = nodes => {
        for (let i = 0; i < nodes.children.length; i++) {
          document.getElementById(nodes.children[i]['id']).style.marginTop = '20px'
        }
    }

    const whereAmI = (currentYPos, nodes) => {
        establishNodePositions(nodes)
    
        //identify the node right over the selected one
        let nodeAbove
        let nodeBelow
        for (let i = 0; i < nodes.children.length; i++) {
            
          if (nodes.children[i]['yPos'] < currentYPos) {
            selectedNodePos = i+1
            nodeAbove = document.getElementById(nodes.children[i]['id'])
          } else {
            //this node must be lower down the page than the selectedNode
            if (!nodeBelow) {
              nodeBelow = document.getElementById(nodes.children[i]['id'])
            }
          }
        }

        if (typeof nodeAbove === 'undefined') {
            selectedNodePos = 0
        }

        resetNodes(nodes)

        if (typeof nodeBelow === 'object') {
            nodeBelow.style.marginTop = '3em'
            nodeBelow.style.transition = '1.8s'
        }        
    }

    const dropHandler = e => {
        let parent = e.currentTarget
        parent.insertBefore(currentNode, parent.children[selectedNodePos])

        resetNodes(parent)

        removeBg()

        let newProducts = props.products.map(item => {
            return {...item}
        })

        let products = newProducts.filter((item, i) => item.id !== currentId)
        products.splice(
            currentIndex < selectedNodePos ? 
                selectedNodePos - 1 : 
                selectedNodePos, 
            0, newProducts[currentIndex]
        )

        props.orderList(null, null, true, products)
    }

    const establishNodePositions = nodes => {
        for (let i = 0; i < nodes.children.length; i++) {
          const element = document.getElementById(nodes.children[i]['id'])
          const position = element.getBoundingClientRect()
          const yTop = position.top
          const yBottom = position.bottom
          const yCenter = yTop + ((yBottom - yTop) / 2)
          nodes.children[i]['yPos'] = yCenter
        }
    }

    const removeBg = () => {
        setTimeout(() => {
            currentNode.style.backgroundColor = 'transparent'
            currentNode.style.transition = '1s'
        }, 200)
    }
    /* ** */

    const orderListHandler = (order, direction, e) => {
        props.orderList(order, direction, false)

        let arrowOrder = e.currentTarget
        Array.from(arrowOrder.parentNode.parentNode.children)
            .forEach(item => {
                Array.from(item.children)
                    .forEach(subItem => {
                        if (subItem.tagName) {
                            subItem.style.color = 'rgb(126, 125, 125)'
                        }
                    })
            })

        arrowOrder.style.color = 'green'
    }
    
    const orderHeaderContainer = document.getElementById('orderContainer')
    if (orderHeaderContainer !== null) {
        Array.from(orderHeaderContainer.childNodes)
            .forEach(title => {
                if (props.productsOrder[1] === title.id) {
                    Array.from(title.children) 
                        .forEach(arrow => {
                            if (arrow.tagName === 'svg') {
                                arrow.classList[1].match(props.productsOrder[0]) ? 
                                    arrow.style.color = 'green' :
                                    arrow.style.color = 'rgb(126, 125, 125)'
                            }
                        })
                }
            })
    }



    return (
        <Fragment>
            <div 
                id='orderContainer'
                className={classes.FormOutput_header}
            >
                <div id="id">
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={e => orderListHandler('id', 'up', e)}
                    />
                    <p>ID</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={e => orderListHandler('id', 'down', e)}
                    />
                </div>
                <div id="nome">
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={e => orderListHandler('nome', 'up', e)}
                    />
                    <p>Nome</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={e => orderListHandler('nome', 'down', e)}
                    />
                </div>
                <div id="qtde">
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={e => orderListHandler('qtde', 'up', e)}
                    />
                    <p>Quantidade</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={e => orderListHandler('qtde', 'down', e)}
                    />
                </div>
                <div id="valor">
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={e => orderListHandler('valor', 'up', e)}
                    />
                    <p>Valor Unitário</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={e => orderListHandler('valor', 'down', e)}
                    />
                </div>
                <div id="valorTotal">
                    <FontAwesomeIcon 
                        icon="sort-amount-up" 
                        onClick={e => orderListHandler('valorTotal', 'up', e)}
                    />
                    <p>Valor Total</p>
                    <FontAwesomeIcon 
                        icon="sort-amount-down-alt" 
                        onClick={e => orderListHandler('valorTotal', 'down', e)}
                    />
                </div>
                <p></p>
            </div>

            <div 
                className={classes.Products_list_container} 
                onDragOver={e => dragOverHandler(e)}
                onDragEnd={e => dropHandler(e)}
            >
                {
                    props.products.map((product, index) => {
                        return <div 
                                    key={product.id}
                                    className={classes.Product_container}
                                    id={index}
                                    draggable
                                    onDragStart={e => dragStartHandler(e, product.id, index)}
                                    onMouseDown={e => editDraggableItem(e)}
                                    onMouseUp={removeBg}
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
                                    <p onDragStart={e => dragStartHandler(e, product.id)} >{(product.qtde * product.valor).toFixed(2)}</p>
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

export default ProductsList