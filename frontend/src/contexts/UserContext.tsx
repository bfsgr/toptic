import { ReactNode, createContext, useEffect, useState } from 'react'

interface Profile {
  id: number
  name: string
  email: string
  role: 'aluno' | 'orientador' | 'coordenador' | 'secretaria'
}

interface UserContextInterface {
  user: Profile | null
  login: (email: string, password: string) => Promise<Profile>
  logout: () => void
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  login: async () => {
    throw new Error('UserContext not initialized')
  },
  logout: () => {},
})

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Profile | null>(null)

  const USERS: Record<string, Profile> = {
    'aluno@uem.br': {
      id: 1,
      name: 'Aluno 1',
      email: 'aluno@uem.br',
      role: 'aluno',
    },
    'secretaria@uem.br': {
      id: 2,
      name: 'Secretária 1',
      email: 'secretaria@uem.br',
      role: 'secretaria',
    },
    'orientador@uem.br': {
      id: 3,
      name: 'Orientaador 1',
      email: 'orientador@uem.br',
      role: 'orientador',
    },
    'coordenador@uem.br': {
      id: 4,
      name: 'Coordenador 1',
      email: 'coordenador@uem.br',
      role: 'coordenador',
    },
  }

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user') ?? 'null'))
  }, [])

  async function login(email: string) {
    const dbUser = USERS[email] ?? null

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (dbUser === null)
      throw new Error('Usuário não encontrado ou senha incorreta.')

    setUser(dbUser)

    sessionStorage.setItem('user', JSON.stringify(dbUser))

    return dbUser
  }

  function logout() {
    setUser(null)
    sessionStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
