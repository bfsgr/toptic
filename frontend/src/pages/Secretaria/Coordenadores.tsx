import { Badge } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'

export function Coordenadores() {
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
      title: 'Email',
      dataIndex: 'email',
      ellipsis: true,
      key: 'email',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Início mandato',
      dataIndex: 'inicioMandato',
      key: 'inicioMandato',
      align: 'end',
    },
    {
      title: 'Fim mandato',
      dataIndex: 'fimMandato',
      key: 'fimMandato',
      align: 'end',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
      align: 'end',
    },
  ]

  return (
    <Navigation title="Coordenadores">
      <CardsTable
        columns={headers}
        emptyText="Nenhum coordenador encontrado"
        data={[
          {
            id: 1,
            nome: 'Bruno',
            email: 'ra110098@uem.br',
            tipo: 'Chefe',
            inicioMandato: '01/01/2023',
            fimMandato: '01/01/2024',
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
