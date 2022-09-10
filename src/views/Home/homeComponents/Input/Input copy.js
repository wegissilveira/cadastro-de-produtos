// import React, { Fragment } from 'react'

// import classes from './Input.module.scss'

// const Input = props => {
//    const validationMsg = {
//       validationName: '*O nome do produto não deve iniciar com espaço.',
//       validationQty: '*Somente números e ponto. Quantidade não deve iniciar com 0.',
//       validationValue: '*Somente números e ponto. Valor não deve iniciar com 0.'
//    }
   
//    const inputElement = (
//       props.productForm.map((item, i) => {
//          const inputClasses = [classes.InputElement]
//          let erroMsg = null

//          if (item.config.touched && !item.config.valid) {
//             inputClasses.push(classes.Invalid)

//             if (item.field === 'nome') erroMsg = validationMsg.validationName
//             if (item.field === 'qtde') erroMsg = validationMsg.validationQty
//             if (item.field === 'valor') erroMsg = validationMsg.validationValue
//          }

//          let input
//          if (item.config.elementType) {
//             input =
//                <Fragment key={item+'-'+i}>
//                   <label>
//                      {item.config.label}
//                      <span>&nbsp; {erroMsg}</span>
//                   </label>
//                   <input 
//                      className={inputClasses.join(' ')}
//                      value={item.config.value}
//                      onChange={e => props.changed(e, i)}
//                      {...item.config.elementConfig}
//                   />
//                </Fragment>
//          }
//          return input
//       })
//    )

//    return (
//       <div>
//          {inputElement}
//       </div>
//    )
// }

// export default Input