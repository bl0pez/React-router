import {BrowserRouter} from 'react-router-dom';
import {AppRouters} from './routes/AppRouters';

export function App() {
  return (
   <>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
   </>
  )
}
