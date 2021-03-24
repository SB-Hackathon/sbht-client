import React from 'react'
import Flag from './Flag'

import { Container, Row } from 'react-bootstrap'
import SearchBar from './SearchBar'

const Homepage = () => {
  return (
    <Container>
      <Row>
        <SearchBar />
      </Row>
      <Row style={{
        margin: 'auto'
      }}>
        <Flag />
        <Flag />
        <Flag />
      </Row>
    </Container>
  )
}

export default Homepage
