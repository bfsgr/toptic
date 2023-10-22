import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { Badge, Button, Flex, TextField } from '@radix-ui/themes'
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
      <Flex gap="2" style={{ margin: '8px 0', padding: '0 8px ' }}>
        <TextField.Root style={{ width: '100%' }}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Busque por nome" />
        </TextField.Root>
        <Button variant="soft">
          <PlusIcon height="16" width="16" />
          Novo mandato
        </Button>
      </Flex>
      <CardsTable
        columns={headers}
        emptyText="Nenhum coordenador encontrado"
        data={[
          {
            key: 1,
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
