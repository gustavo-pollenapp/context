import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { HoverContextProvider } from './context/form'

import('./index.css')

ReactDOM.render(
    <HoverContextProvider>
        <App />
    </HoverContextProvider>,
    document.getElementById('root')
)
