import { Avatar, Flex, Heading, Link } from '@radix-ui/themes'
import { ReactNode } from 'react'
import logoImg from '../assets/logo.jpeg'

interface Props {
  title: string
  children: ReactNode
}

export default function Navigation({ children, title }: Props) {
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
        <Link size="6" weight="medium" underline="always">
          {title}
        </Link>
      </Flex>
      <Flex direction="column" width="100%">
        <Flex
          height="9"
          align="center"
          justify="between"
          style={{ borderBottom: '1px solid var(--gray-8)', padding: '0 16px' }}
        >
          <Heading>{title}</Heading>
          <Avatar fallback="A"></Avatar>
        </Flex>
        {children}
      </Flex>
    </Flex>
  )
}
