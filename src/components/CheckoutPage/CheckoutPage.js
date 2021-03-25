import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import StripeCheckout from 'react-stripe-checkout'

class CheckoutPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      show: false
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  render () {
    const { businessName, quantity, rate, total } = this.props
    const { show } = this.state
    const handleClose = () => this.setState({ show: false })
    const handleShow = () => {
      this.setState({ show: true })
    }

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Checkout</h3>
          <Form>
            <Form.Group controlId="businessName">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="businessName"
                value={businessName}
                placeholder="What's the name of the business you're purchasing from today?"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quanity of Purchase</Form.Label>
              <Form.Control
                required
                name="quantity"
                value={quantity}
                type="text"
                placeholder="Input your length of stay (days)"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="rate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                required
                name="rate"
                value={rate}
                type="text"
                placeholder="input rate per day $USD"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="total">
              <Form.Label>Total</Form.Label>
              <Form.Control
                required
                name="total"
                value={total}
                type="text"
                placeholder="total price"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleShow}
            >
              Submit
            </Button>
          </Form>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Name of Business: {this.props.businessName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>quantity: {this.props.quantity}</div>
              <div>rate: ${this.props.rate} per day</div>
              <div>Total: ${this.props.total}</div>
            </Modal.Body>
            <Modal.Body>
              <StripeCheckout stripeKey="pk_test_51IF03kIkhqLtNmbJwOU6YIQFW7e45twsNwVBF9jeIEIJV7ftyo7ReWXTPXq8LaZZkZtpB6wGRhQGFfC5M7Kc271w00Ci70YINz">
              </StripeCheckout>
            </Modal.Body>
            <Modal.Body>Pay to confirm</Modal.Body>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal>
        </div>
      </div>
    )
  }
}

export default withRouter(CheckoutPage)
