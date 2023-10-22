import RcTable, { TableProps } from 'rc-table'

export function CardsTable(props: TableProps<Record<any, any>>) {
  return (
    <RcTable
      emptyText="Nenhum dado encontrado"
      className="cardsTable"
      {...props}
    />
  )
}
