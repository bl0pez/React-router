import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { AppRouters } from './routes/AppRouters';

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRouters />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}
