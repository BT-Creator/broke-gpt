import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={{
      headings: { fontFamily: "Noto Sans, sans-serif" },
      fontFamily: "Noto Sans, sans-serif"
    }}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
