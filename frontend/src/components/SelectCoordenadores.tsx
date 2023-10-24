import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  role: 'aluno' | 'orientador' | 'coordenador' | 'secretaria'
}

interface SelectCoordenadoresProps {
  valor: string
  mudancaMembros: (value: string) => void
}

export const SelectCoordenadores: React.FC<SelectCoordenadoresProps> = ({
  valor,
  mudancaMembros,
}) => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/usuarios')
      .then((response) => response.json())
      .then((data: User[]) => {
        const filteredUsers = data.filter(
          (user) => user.role === 'coordenador' || user.role === 'orientador',
        )
        setUsers(filteredUsers)
      })
      .catch((error) => {
        console.error('Erro ao buscar usuários:', error)
        setUsers([])
      })
  }, [])

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    mudancaMembros(event.target.value)
  }

  return (
    <div>
      <select value={valor} onChange={handleUserChange}>
        <option className="placeholderFake" value="">
          Selecione:
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  )
}
