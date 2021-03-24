import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import App from './App'
import { HashRouter } from 'react-router-dom'
// import Homepage from './components/Homepage/Homepage'

import 'bootstrap/js/dist/dropdown'
import ProfileContainer from './components/ProfilePage/ProfileContainer'

const appJsx = (
  <HashRouter>
    {/* <App /> */}
    {/* <Homepage /> */}
    <ProfileContainer />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
