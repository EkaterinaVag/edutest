import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMClient from 'react-dom/client'

import App from './components/App/App'
import { store } from './store/store'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const mountNode = document.getElementById('root')!
const root = ReactDOMClient.createRoot(mountNode)
root.render(
    <Provider store={store} >
        <App />
    </Provider>
)
