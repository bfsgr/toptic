import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.scss'
import Aluno from './pages/Aluno/index.tsx'

const router = createBrowserRouter([
  {
    path: '/aluno',
    element: <Aluno />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="purple">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
