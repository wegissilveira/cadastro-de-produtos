import React, { Component } from 'react'

import classes from './FormInputConfig.module.css'

import Input from '../../components/UI/Input/Input'
import * as productActions from '../../store/actions/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'


class FormInputConfig extends Component {

    state = {
        productForm: {
            id: {
                elementType: false,
                value: '',
                validation: {},
                valid: true,
                touched: false
            },
            nome: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nome do Produto',
                    name: 'nome',
                },
                label: 'Nome do Produto',
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            qtde: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Quantidade',
                    name: 'qtde',
                },
                label: 'Quantidade',
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            valor: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Valor Unitário',
                    name: 'valor',
                },
                label: 'Valor Unitário',
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            valorTotal: {
                elementType: false,
                value: 0,
                validation: {},
                valid: true,
                touched: false
            }
        },
        formIsValid: false
    }


    componentDidMount() {
        this.props.onInitProducts('load')
    }

    closeResponsiveFormHandler = () => {
        this.props.toggleForm()
    }

    addIdHandler = products => {    
        const ids = []
        products.forEach(product => {
            ids.push(product.id)
        })

        const sparse = ids.reduce((sparse, i) => (sparse[i]=1,sparse), [])
        const x = [...sparse.keys()].filter(i => i && !sparse[i])

        let new_id
        if (x.length > 0) {
            new_id = Math.min(...x)
        } else {
            new_id = ids.length === 0 ? 1 : Math.max(...ids) + 1
        }

        return new_id
    }

    checkFormValidityHandler(value, rules) {
        let isValid = false

        if (rules.required) {
            isValid = value.toString().trim() !== '' && value !== 0
        }

        return isValid
    }

    inputChangeHandler = (e, field) => {
        let updatedProduct = {...this.state.productForm}
        let updatedProductField = {...updatedProduct[field]}

        let value = e.target.value
        let name = e.target.name

        if (name === 'nome') {
            value = value.replace(/^\s/, "")
        }

        if (name === 'qtde' || name === 'valor') {
            value = value.replace(/^0|[^\d.]|\.(?=.*\.)/g, "")
        }

        updatedProductField.value = value
        updatedProductField.valid = this.checkFormValidityHandler(updatedProductField.value, updatedProductField.validation)
        updatedProductField.touched = true

        updatedProduct[field] = updatedProductField
        updatedProduct.valorTotal.value = updatedProduct.qtde.value * updatedProduct.valor.value

        let formIsValid = true
        for (let field in updatedProduct) {
            formIsValid = updatedProduct[field].valid && formIsValid
        }

        this.setState({
            productForm: updatedProduct,
            formIsValid
        })
    }

    submitProductHandler = product => {
        this.props.onPostProducts(product)
        this.cleanForm()
    }

    formatFormHandler = e => {
        e.preventDefault()

        let productForm = {...this.state.productForm}
        
        productForm.qtde.value = Number(productForm.qtde.value)
        productForm.valor.value = Number(productForm.valor.value)

        const productsList = this.props.productsList
        productForm.id.value = this.addIdHandler(productsList)

        const productValues = {}
        for (let key in productForm) {
            productValues[key] = productForm[key].value
        }

        productsList.push(productValues)

        this.submitProductHandler(productsList)
    }

    cleanForm = () => {
        let productForm = {...this.state.productForm}

        for (let key in productForm) {
            productForm[key].value = ''
        }

        this.setState({productForm})
    }



    render () {
        
        const productForm = []
        for (let key in this.state.productForm) {
            productForm.push({
                field: key,
                config: this.state.productForm[key]
            })
        }


        return (

            <div 
                className={classes.Insert_product_container}
                id='responsive_form'
            >
                <FontAwesomeIcon 
                    icon="external-link-alt" 
                    color="red" 
                    size="3x"
                    onClick={this.closeResponsiveFormHandler}
                />
                <div className={classes.Insert_product_subContainer}>
                    <div>
                        <h2>Registre Um Novo Produto</h2>
                    </div>
                    <form 
                        onSubmit={this.formatFormHandler} 
                        className={classes.Insert_product_form}
                    >
                        <div>
                            {productForm.map(el => {
                                let input
                                if (el.config.elementType !== false) {
                                    input = <Input
                                                key={el.field}
                                                elementType={el.config.elementType} 
                                                elementConfig={el.config.elementConfig} 
                                                value={el.config.value} 
                                                invalid={!el.config.valid}
                                                touched={el.config.touched}
                                                label={el.config.label}
                                                changed={e => this.inputChangeHandler(e, el.field)}
                                            />
                                }
                                return input
                            })}
                        </div>
                        
                        <button disabled={!this.state.formIsValid}>
                            <p>Inserir Produto</p>
                            <FontAwesomeIcon 
                                icon="chevron-circle-right" 
                            />
                        </button>
                        
                    </form>
                </div>
            </div>
        )
    } 
    
}

const mapStateToProps = state => {
    return {
        productsList: state.productsDataState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostProducts: products =>
            dispatch(productActions.postProducts(products)),
        onInitProducts: origin => 
            dispatch(productActions.initProducts(origin))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormInputConfig)