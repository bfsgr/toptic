import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserProvider } from './contexts/UserContext.tsx'
import './index.scss'
import Aluno from './pages/Aluno/index.tsx'
import { ErrorPage } from './pages/ErrorBoundary/index.tsx'
import { Login } from './pages/Login/index.tsx'
import { Secretaria } from './pages/Secretaria/index.tsx'

function authorize(role: string) {
  return () => {
    const user = JSON.parse(sessionStorage.getItem('user') ?? 'null')
    if (!user) {
      return redirect('/login')
    }

    if (user.role !== role) {
      return redirect(`/${user.role}`)
    }

    return null
  }
}

const router = createBrowserRouter([
  {
    path: '',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        loader: () => {
          const user = JSON.parse(sessionStorage.getItem('user') ?? 'null')

          if (user) {
            return redirect(`/${user.role}`)
          }

          return null
        },
        element: <Login />,
      },
      {
        path: '/aluno',
        loader: authorize('aluno'),
        element: <Aluno />,
      },
      {
        path: '/secretaria',
        loader: authorize('secretaria'),
        element: <Secretaria />,
      },
      {
        path: '/',
        loader: authorize(''),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="indigo">
      <UserProvider>
        <RouterProvider router={router} />
        <ToastContainer
          newestOnTop={true}
          position="bottom-right"
          autoClose={3000}
          transition={Slide}
          closeButton={true}
          closeOnClick={true}
        />
      </UserProvider>
    </Theme>
  </React.StrictMode>,
)
