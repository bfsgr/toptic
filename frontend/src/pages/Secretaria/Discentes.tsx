import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { Badge, Button, Flex, TextField } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'
import { toast } from 'react-toastify'
import { PuffLoader } from 'react-spinners'

import { api } from '../../api'
import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'

interface MyData {
  id: number
  Usuario: {
    nome_social?: string
    nome: string
    numero_matricula: string
  }
  status: string
}

export function Discentes() {
  let idCounter = 0

  const [data, setData] = useState<MyData[]>([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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

  useEffect(() => {
    setIsLoading(true)
    setData([])
    if (search)
      api
        .get(`/alunos/${search}`)
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
      .get('/alunos')
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
    <Navigation title="Discentes">
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
        <Button variant="soft">
          <PlusIcon height="16" width="16" />
          Novo discente
        </Button>
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
          emptyText="Nenhum discente encontrado"
          data={data.map((item) => {
            idCounter++
            return {
              key: item.id,
              id: idCounter,
              nome: item.Usuario.nome_social
                ? item.Usuario.nome_social
                : item.Usuario.nome,
              ra: item.Usuario.numero_matricula,
              estado: (
                <Badge variant="solid" radius="none" color="green">
                  {item.status}
                </Badge>
              ),
            }
          })}
        />
      )}
    </Navigation>
  )
}
