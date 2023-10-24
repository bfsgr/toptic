import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Flex, TextField } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'
import { useEffect, useState } from 'react'
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

function Orientador() {
  let idCounter = 0

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
      align: 'end',
    },
  ]

  useEffect(() => {
    setIsLoading(true)
    setData([])
    if (search)
      api
        .get(
          `/solicitacoes/orientador/6f92c643-e137-408c-82d8-5dc725c28a14/${search}`,
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
      .get('/solicitacoes/orientador/6f92c643-e137-408c-82d8-5dc725c28a14')
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
            idCounter++
            return {
              key: item.id,
              id: idCounter,
              discente: item.Alunos.Usuario.nome_social
                ? item.Alunos.Usuario.nome_social
                : item.Alunos.Usuario.nome,
              tipo: item.tipo_solicitacao,
              curso: item.tipo_curso,
              estado: item.estado,
              atualizacao: Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short',
              }).format(new Date(item.updated_at)),
            }
          })}
        />
      )}
    </Navigation>
  )
}

export default Orientador
