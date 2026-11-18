import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Elemento #root não encontrado')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// O HTML já vem pré-renderizado do build; em desenvolvimento a página começa vazia.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
