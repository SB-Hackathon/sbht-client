import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/js/dist/dropdown'

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
