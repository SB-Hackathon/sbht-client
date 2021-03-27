import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Homepage from './components/Homepage/Homepage'

import CheckoutPage from './components/CheckoutPage/CheckoutPage'
import ZipReq from './components/ZipRequest/ZipReq'
import OfferCard from './components/ProfilePage/OfferCard'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <div className='App'>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Switch>
            <Route path='/sign-up' render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/change-password' render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/check-out' render={() => (
              <CheckoutPage msgAlert={this.msgAlert} user={user} />
            )} />
            {/* <AuthenticatedRoute user={user} path='/home' render={() => (
                <Homepage user={user} />
              )} /> */}
            <Route path='/home' render={() => (
              <Homepage />
            )} />
            <Route path='/zipcode' render={() => (
              <ZipReq />
            )} />
            <Route path='/:id' render={(props) => (
              <OfferCard />
            )} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
