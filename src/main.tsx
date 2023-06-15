import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <StrictMode> lets you find common bugs in your components early during development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
