import { ProductKeys } from 'common/types'

interface HeaderTitle {
   id: ProductKeys
   text: string
}

export const productsListHeaderItems: HeaderTitle[] = [
   {
      id: 'id',
      text: 'ID'
   },
   {
      id: 'nome',
      text: 'Nome'
   },
   {
      id: 'qtde',
      text: 'Quantidade'
   },
   {
      id: 'valor',
      text: 'Valor Unitário'
   },
   {
      id: 'valorTotal',
      text: 'Valor Total'
   },
]