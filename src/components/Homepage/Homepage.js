import React from 'react'
import Flag from './Flag'

import { Row } from 'react-bootstrap'
import SearchBar from './SearchBar'

const Homepage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Row style={{
        margin: 'auto'
      }}>
        <SearchBar />
      </Row>
      <div>
        <Flag />
      </div>
    </div>
  )
}

export default Homepage
