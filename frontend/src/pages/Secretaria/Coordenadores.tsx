import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { PuffLoader } from 'react-spinners'
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { Badge, Button, Flex, TextField } from '@radix-ui/themes'
import { ColumnsType } from 'rc-table/lib/interface'

import { CardsTable } from '../../components/CardsTable'
import Navigation from '../../components/Navigation'
import { api } from '../../api'

interface MyData {
  id: number
  Usuario: {
    nome_social?: string
    nome: string
    email: string
    tipo: string
  }
  inicio_mandato: string
  fim_mandato: string
}

export function Coordenadores() {
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

  useEffect(() => {
    setIsLoading(true)
    setData([])
    if (search)
      api
        .get(`/coordenadores/${search}`)
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
      .get('/coordenadores')
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
    <Navigation title="Coordenadores">
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
          Novo mandato
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
          emptyText="Nenhum coordenador encontrado"
          data={data.map((item) => {
            idCounter++
            return {
              key: item.id,
              id: idCounter,
              nome: item.Usuario.nome_social
                ? item.Usuario.nome_social
                : item.Usuario.nome,
              email: item.Usuario.email,
              tipo: item.Usuario.tipo,
              inicioMandato: Intl.DateTimeFormat('pt-Br', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              }).format(new Date(item.inicio_mandato)),
              fimMandato: Intl.DateTimeFormat('pt-Br', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              }).format(new Date(item.fim_mandato)),
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
