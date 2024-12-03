import { ThemeProvider } from 'styled-components'
import { light } from './styles/theme'
import  { router } from './routes/AppRoute.routes'
import GlobalStyle from './styles/global';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner'

function App() {

  return (
    <ThemeProvider theme={light}>
        <Toaster richColors />
        <RouterProvider router={router}/>
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
