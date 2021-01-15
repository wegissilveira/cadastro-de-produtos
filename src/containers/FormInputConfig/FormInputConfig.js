import React, { Component } from 'react'

import classes from './FormInputConfig.module.css'

import Input from '../../components/UI/Input/Input'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FormInputConfig extends Component {

    state = {
        productForm: {
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
                touched: true
            }
        }
    }

    closeResponsiveFormHandler = () => {
        this.props.toggleForm()
    }


    checkFormValidityHandler(value, rules) {

        let isValid = false

        if (rules.required) {
            isValid = value.toString().trim() !== '' && value !== 0
        }


        // console.log(value)
        // console.log(rules)

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
            value = value.replace(/[^\d.]|\.(?=.*\.)/g, "")
        }

        updatedProductField.value = value
        updatedProductField.valid = this.checkFormValidityHandler(updatedProductField.value, updatedProductField.validation)
        updatedProductField.touched = true

        updatedProduct[field] = updatedProductField
        updatedProduct.valorTotal.value = updatedProduct.qtde.value * updatedProduct.valor.value

        this.setState({productForm: updatedProduct})
    }

    submitFormHandler = e => {
        e.preventDefault()

        let productForm = {...this.state.productForm}

        productForm.qtde.value = Number(productForm.qtde.value)
        productForm.valor.value = Number(productForm.valor.value)

        console.log(productForm)
        // console.log(this.state.productForm)
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
                    onClick={this.closeResponsiveForm}
                />
                <div className={classes.Insert_product_subContainer}>
                    <div>
                        <h2>Registre Um Novo Produto</h2>
                    </div>
                    <form 
                        onSubmit={this.submitFormHandler} 
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
                        
                        <button>
                            <p>Inserir Produto</p>
                            <FontAwesomeIcon 
                                icon="chevron-circle-right" 
                                color="#8DFFC2"
                            />
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    
    
}

export default FormInputConfig