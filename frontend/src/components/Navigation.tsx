import { ExitIcon, PersonIcon } from '@radix-ui/react-icons'
import {
  Avatar,
  Flex,
  Heading,
  Link,
  Popover,
  Separator,
} from '@radix-ui/themes'
import { ReactNode, useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logoImg from '../assets/pcc.png'
import { UserContext } from '../contexts/UserContext'

interface Props {
  title: string
  children: ReactNode
}

export default function Navigation({ children, title }: Props) {
  const { user, logout } = useContext(UserContext)

  if (!user) return null

  const sidebarOpts: Record<string, { label: string; href: string }[]> = {
    aluno: [{ label: 'Solicitações', href: '/aluno' }],
    orientador: [{ label: 'Solicitações', href: '/orientador' }],
    coordenacao: [{ label: 'Solicitações', href: '/coordenacao' }],
    secretaria: [
      { label: 'Solicitações', href: '/secretaria' },
      { label: 'Discentes', href: '/secretaria/discentes' },
      { label: 'Orientadores', href: '/secretaria/orientadores' },
      { label: 'Coordenadores', href: '/secretaria/coordenadores' },
      { label: 'Externos', href: '/secretaria/externos' },
    ],
  }

  return (
    <Flex>
      <Flex
        direction="column"
        style={{
          width: '210px',
          borderRight: '1px solid var(--gray-8)',
          minHeight: '100vh',
          maxHeight: '100vh',
          gap: '8px',
          padding: '0 8px',
          alignItems: 'stretch',
        }}
      >
        <img
          height="81px"
          width="180px"
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          src={logoImg}
        />
        {sidebarOpts[user.role].map(({ label, href }) => (
          <Link asChild key={href} size="6" weight="medium" underline="always">
            <RouterLink to={href}>{label}</RouterLink>
          </Link>
        ))}
      </Flex>
      <Flex direction="column" width="100%">
        <Flex
          height="9"
          align="center"
          justify="between"
          style={{ borderBottom: '1px solid var(--gray-8)', padding: '0 16px' }}
        >
          <Heading>{title}</Heading>

          <Popover.Root>
            <Popover.Trigger>
              <Link>
                <Avatar fallback={user.name[0]} />
              </Link>
            </Popover.Trigger>
            <Popover.Content style={{ width: 200 }}>
              <Flex direction="column" justify="center">
                <Link
                  style={{
                    marginTop: '2px',
                    width: '100%',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                  }}
                >
                  <PersonIcon />
                  Meu perfil
                </Link>
                <Separator style={{ width: '100%', margin: '8px 0 8px' }} />
                <Link
                  color="red"
                  asChild
                  style={{
                    marginTop: '2px',
                    width: '100%',
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                  }}
                >
                  <RouterLink to="/login" onClick={logout}>
                    <ExitIcon />
                    Sair
                  </RouterLink>
                </Link>

                <Popover.Close />
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </Flex>
        {children}
      </Flex>
    </Flex>
  )
}
