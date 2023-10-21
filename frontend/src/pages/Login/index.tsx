import { zodResolver } from '@hookform/resolvers/zod'
import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Button, Card, Flex, TextField } from '@radix-ui/themes'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'
import logoImg from '../../assets/logo.jpeg'
import { WithErrorMessage } from '../../components/WithErrorMessage'
import { UserContext } from '../../contexts/UserContext'

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string
    password: string
  }>({
    resolver: zodResolver(
      z.object({
        email: z.string().email('Email inválido'),
        password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
      }),
    ),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const navigate = useNavigate()

  const { login } = useContext(UserContext)

  async function handleLogin(data: { email: string; password: string }) {
    toast.promise(
      async () => {
        const user = await login(data.email, data.password)

        if (user) {
          navigate(`/${user.role}`)
        }
      },
      {
        pending: 'Autenticando...',
        success: 'Usuário autenticado com sucesso',
        error: 'Usuário não encontrado ou senha incorreta.',
      },
    )
  }

  return (
    <Flex
      direction="column"
      width="100%"
      align="center"
      justify="center"
      style={{
        minHeight: '100svh',
        maxHeight: '100vh',
        gap: '8px',
        padding: '0 8px',
        backgroundColor: 'var(--purple-a1)',
      }}
    >
      <Card size="3">
        <form onSubmit={handleSubmit(handleLogin)} noValidate>
          <Flex gap="3" align="center" direction="column">
            <img width="240px" src={logoImg} />
            <WithErrorMessage error={errors.email?.message}>
              <TextField.Root>
                <TextField.Slot>
                  <PersonIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input
                  aria-invalid={errors.email?.message !== undefined}
                  placeholder="Email"
                  type="email"
                  {...register('email')}
                />
              </TextField.Root>
            </WithErrorMessage>
            <WithErrorMessage error={errors.password?.message}>
              <TextField.Root>
                <TextField.Slot>
                  <LockClosedIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input
                  placeholder="Senha"
                  type="password"
                  {...register('password')}
                />
              </TextField.Root>
            </WithErrorMessage>
            <Button style={{ width: '100%' }} type="submit">
              Entrar
            </Button>
          </Flex>
        </form>
      </Card>
    </Flex>
  )
}
