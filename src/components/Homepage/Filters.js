import React from 'react'
import { Form } from 'react-bootstrap'

const Filters = () => {
  return (
    <div>
      <Form>
        <div className='mb-3'>
          <Form.Check
            type='checkbox'
            label='Museums'
          />
          <Form.Check
            type='checkbox'
            label='Category'
          />
          <Form.Check
            type='checkbox'
            label='Category'
          />
          <Form.Check
            type='checkbox'
            label='Category'
          />
        </div>
      </Form>
    </div>
  )
}

export default Filters
