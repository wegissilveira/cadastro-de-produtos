export const outputForm = [
   {
      field: 'id',
      config: {
         elementType: false,
         value: '',
         validation: {},
         valid: true,
         touched: false
      }
   },
   {
      field: 'nome',
      config: {
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
      }
   },
   {
      field: 'qtde',
      config: {
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
      }
   },
   {
      field: 'valor',
      config: {
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
      }
   },
   {
      field: 'valorTotal',
      config: {
         elementType: false,
         value: 0,
         validation: {},
         valid: true,
         touched: false
      }
   }
]