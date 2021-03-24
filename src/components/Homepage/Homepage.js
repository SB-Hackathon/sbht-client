import React from 'react'
import Flag from './Flag'

import { Container, Row } from 'react-bootstrap'
import SearchBar from './SearchBar'

const Homepage = () => {
  return (
    <Container>
      <Row style={{
        margin: 'auto'
      }}>
        <SearchBar />
      </Row>
      <Row style={{
        marginTop: '50px'
      }}>
        <Flag />
        <Flag />
        <Flag />
      </Row>
    </Container>
  )
}

export default Homepage
