import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      firstName: '',
      lastName: '',
      zip: '',
      dateOfBirth: '',
      race: '',
      gender: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '', firstName: '', lastName: '', zip: '', dateOfBirth: '', race: '', gender: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation, firstName, lastName, zip, dateOfBirth, race, gender } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Sign Up</h3>
          <Form onSubmit={this.onSignUp}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                name="firstName"
                value={firstName}
                type="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                name="lastName"
                value={lastName}
                type="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="zip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                required
                name="zip"
                value={zip}
                type="zip"
                placeholder="Zip Code"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                required
                name="dateOfBirth"
                value={dateOfBirth}
                type="dateOfBirth"
                placeholder="Date of Birth"
                onChange={this.handleChange}
              />
            </Form.Group>
            <label>Race</label>
            <select required placeholder='Race' name='race' value={race} onChange={this.handleChange}>
              <option disabled={true} value="" className='placeholderValue'>Choose race</option>
              <option value='Placeholder1'>Placeholder 1</option>
              <option value='Placeholder2'>Placeholder 2</option>
              <option value='Placeholder3'>Placeholder 3</option>
              <option value='Placeholder4'>Placeholder 4</option>
              <option value='Placeholder5'>Placeholder 5</option>
            </select>
            <label>Gender</label>
            <select required placeholder='Gender' name='gender' value={gender} onChange={this.handleChange}>
              <option disabled={true} value="" className='placeholderValue'>Choose gender</option>
              <option value='Option1'>Option 1</option>
              <option value='Option2'>Option 2</option>
              <option value='Option3'>Option 3</option>
              <option value='Option4'>Option 4</option>
              <option value='Option5'>Option 5</option>
            </select>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
