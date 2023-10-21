import { Flex, Text } from '@radix-ui/themes'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  error?: string
}

export function WithErrorMessage({ children, error }: Props) {
  return (
    <Flex width="100%" direction="column" gap="1">
      {children}
      {error && (
        <Text size="1" color="red">
          {error}
        </Text>
      )}
    </Flex>
  )
}
