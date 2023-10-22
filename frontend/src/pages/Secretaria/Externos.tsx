import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { Badge, Button, Flex, TextField } from '@radix-ui/themes'
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
      <Flex gap="2" style={{ margin: '8px 0', padding: '0 8px ' }}>
        <TextField.Root style={{ width: '100%' }}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Busque por nome" />
        </TextField.Root>
        <Button variant="soft">
          <PlusIcon height="16" width="16" />
          Novo externo
        </Button>
      </Flex>
      <CardsTable
        columns={headers}
        emptyText="Nenhum externo encontrado"
        data={[
          {
            key: 1,
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
