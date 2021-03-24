import React from 'react'
import { Form } from 'react-bootstrap'

const Filters = () => {
  return (
    <Form>
      <div className='mb-3'
        style={{
          margin: '0 10px'
        }}
      >
        <Form.Check
          type='checkbox'
          label='Lodging'
        />
        <Form.Check
          type='checkbox'
          label='Tourism offices'
        />
        <Form.Check
          type='checkbox'
          label='Event management'
        />
        <Form.Check
          type='checkbox'
          label='Adventure &amp; Recreation'
        />
      </div>
    </Form>
  )
}

export default Filters
