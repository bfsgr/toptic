import { Badge } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'

export function Orientadores() {
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      align: 'end',
    },
  ]

  return (
    <Navigation title="Orientadores">
      <CardsTable
        columns={headers}
        emptyText="Nenhum orientador encontrado"
        data={[
          {
            id: 1,
            nome: 'Bruno',
            email: 'ra110098@uem.br',
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
