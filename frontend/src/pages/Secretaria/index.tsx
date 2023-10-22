import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'

export function Secretaria() {
  const headers = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Discente',
      dataIndex: 'discente',
      key: 'discente',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Curso',
      dataIndex: 'curso',
      key: 'curso',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
    },
    {
      title: 'Última atualização',
      dataIndex: 'atualizacao',
      key: 'atualizacao',
    },
  ]

  return (
    <Navigation title="Solicitações">
      <CardsTable
        columns={headers}
        emptyText="Nenhuma solicitação encontrada"
        // data={[
        //   {
        //     id: 1,
        //     discente: 'Bruno',
        //     tipo: 'Defesa',
        //     curso: 'Doutorado',
        //     estado: 'Aguardando orientador',
        //     atualizacao: new Date().toLocaleString(),
        //   },
        // ]}
      />
    </Navigation>
  )
}
