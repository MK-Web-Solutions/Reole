// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Google Analytics
const GA_ID = 'G-7FF49YQEZ1'

const script = document.createElement('script')
script.async = true
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
document.head.appendChild(script)

window.dataLayer = window.dataLayer || []

function gtag(...args: any[]) {
  window.dataLayer.push(args)
}

gtag('js', new Date())
gtag('config', GA_ID)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)