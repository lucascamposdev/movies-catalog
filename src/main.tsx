import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { register } from 'swiper/element'
register();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
      <App />
  // </React.StrictMode>,
)
