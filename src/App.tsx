import { ThemeProvider } from 'styled-components'
import { light } from './styles/theme'
import  { Router } from './routes/AppRoute.routes'
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner'
import AppGlobalContextProvider from './AppGlobalContextProvider';

function App() {

  return (
    <ThemeProvider theme={light}>
        <Toaster richColors />

        <BrowserRouter>

          <AppGlobalContextProvider>
            <Router/>
          </AppGlobalContextProvider>

        </BrowserRouter>
     
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
