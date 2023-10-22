import { Badge } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'

export function Externos() {
  const headers: ColumnsType<Record<any, any>> = [
    {
      title: 'ID',
      dataIndex: 'id',
      ellipsis: true,

      key: 'id',
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      ellipsis: true,
      key: 'nome',
    },
    {
      title: 'Instituição',
      dataIndex: 'instituicao',
      ellipsis: true,
      key: 'instituição',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      align: 'end',
    },
  ]

  return (
    <Navigation title="Externos">
      <CardsTable
        columns={headers}
        emptyText="Nenhum externo encontrado"
        data={[
          {
            id: 1,
            nome: 'Bruno',
            instituicao: 'UEL',
            estado: (
              <Badge variant="solid" radius="none" color="green">
                Ativo
              </Badge>
            ),
          },
        ]}
      />
    </Navigation>
  )
}
