import { Badge } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'

export function Discentes() {
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
      width: '40%',
      ellipsis: true,
      key: 'nome',
    },
    {
      title: 'Registro acadêmico',
      dataIndex: 'ra',
      key: 'ra',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      align: 'end',
    },
  ]

  return (
    <Navigation title="Discentes">
      <CardsTable
        columns={headers}
        emptyText="Nenhum discente encontrado"
        data={[
          {
            id: 1,
            nome: 'Bruno',
            ra: '110098',
            curso: 'Doutorado',
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
