import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { Button, Flex, Link, TextField } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { Link as RouterLink } from 'react-router-dom'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'

function Aluno() {
  const headers: ColumnsType<Record<any, any>> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
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
      align: 'end',
    },
  ]

  return (
    <Navigation title="Solicitações">
      <Flex gap="2" style={{ margin: '8px 0', padding: '0 8px ' }}>
        <TextField.Root style={{ width: '100%' }}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Busque por nome" />
        </TextField.Root>
        <Link asChild>
          <RouterLink to="/aluno/solicitacao">
            <Button variant="soft" style={{ width: '120px' }}>
              <PlusIcon height="16" width="16" />
              Criar nova
            </Button>
          </RouterLink>
        </Link>
      </Flex>
      <CardsTable
        columns={headers}
        emptyText="Nenhuma solicitação encontrada"
        data={[
          {
            key: 1,
            id: 1,
            discente: 'Bruno',
            tipo: 'Defesa',
            curso: 'Doutorado',
            estado: 'Aguardando orientador',
            atualizacao: new Date().toLocaleString(),
          },
        ]}
      />
    </Navigation>
  )
}

export default Aluno
