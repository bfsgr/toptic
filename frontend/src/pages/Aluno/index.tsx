import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { Button, Flex, Link, TextField } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { Link as RouterLink } from 'react-router-dom'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../api'
import { PuffLoader } from 'react-spinners'

interface MyData {
  id: number
  Alunos: {
    Usuario: {
      nome_social?: string
      nome: string
    }
  }
  tipo_solicitacao: string
  titulo_proposta: string
  tipo_curso: string
  estado: string
  updated_at: string
}

function Aluno() {
  let id = 0

  const [data, setData] = useState<MyData[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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

  useEffect(() => {
    setIsLoading(true)
    setData([])
    if (search)
      api
        .get(
          `/solicitacoes/aluno/95b9c675-f743-40f7-919d-20a17d79e407/${search}`,
        )
        .then((res) => {
          setData(res.data)
        })
        .catch((err) => {
          console.log(err)
          toast.error(`Erro ao carregar as solicitações. ${err}`)
          setData([])
        })
        .finally(() => {
          setIsLoading(false)
        })
  }, [search])

  useEffect(() => {
    setIsLoading(true)
    setData([])
    api
      .get('/solicitacoes/aluno/95b9c675-f743-40f7-919d-20a17d79e407')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
        toast.error(`Erro ao carregar as solicitações. ${err}`)
        setData([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <Navigation title="Solicitações">
      <Flex gap="2" style={{ margin: '8px 0', padding: '0 8px ' }}>
        <TextField.Root style={{ width: '100%' }}>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input
            placeholder="Busque por nome"
            onChange={(e) => setSearch(e.target.value)}
          />
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
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <PuffLoader
            loading={isLoading}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#5848c7"
          />
        </div>
      ) : (
        <CardsTable
          columns={headers}
          emptyText="Nenhuma solicitação encontrada"
          data={data.map((item) => {
            id++
            return {
              key: item.id,
              id: id,
              discente: item.Alunos.Usuario.nome_social
                ? item.Alunos.Usuario.nome_social
                : item.Alunos.Usuario.nome,
              tipo: item.tipo_solicitacao,
              curso: item.tipo_curso,
              estado: item.estado,
              atualizacao: new Date(item.updated_at).toLocaleString(),
            }
          })}
          // data={[
          //   {
          //     key: 1,
          //     id: 1,
          //     discente: 'Bruno',
          //     tipo: 'Defesa',
          //     curso: 'Doutorado',
          //     estado: 'Aguardando orientador',
          //     atualizacao: new Date().toLocaleString(),
          //   },
          // ]}
        />
      )}
    </Navigation>
  )
}

export default Aluno
