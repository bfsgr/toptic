import { useState, useEffect } from 'react'
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
  Professores: {
    Usuario: {
      nome_social?: string
      nome: string
      email: string
    }
  }
}

export function Orientadores() {
  let id = 0

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

  useEffect(() => {
    setIsLoading(true)
    setData([])
    if (search)
      api
        .get(`/orientadores/${search}`)
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
      .get('/orientadores')
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
    <Navigation title="Orientadores">
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
          Novo orientador
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
          emptyText="Nenhum orientador encontrado"
          data={data.map((item) => {
            id++
            return {
              key: item.id,
              id: id,
              nome: item.Professores.Usuario.nome_social
                ? item.Professores.Usuario.nome_social
                : item.Professores.Usuario.nome,
              email: item.Professores.Usuario.email,
              estado: (
                <Badge variant="solid" radius="none" color="green">
                  Ativo
                </Badge>
              ),
            }
          })}
        />
      )}
    </Navigation>
  )
}
