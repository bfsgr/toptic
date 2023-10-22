import { Card, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export function ErrorPage() {
  const { logout } = useContext(UserContext)

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
      <Card size="4">
        <Flex gap="1" direction="column" align="center">
          <Heading>Algo deu errado!</Heading>
          <Text>Tente novamente mais tarde</Text>
          <Link asChild>
            <RouterLink to="/login" onClick={logout}>
              Voltar ao login
            </RouterLink>
          </Link>
        </Flex>
      </Card>
    </Flex>
  )
}
