import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'

const Flag = () => {
  return (
    <Container style={{
      width: '90vw',
      margin: 'auto'
    }}>
      <Row>
        <Card style={{ width: '20vw', height: '60px', border: '1px solid black' }}>Thumbnail</Card>
        <Col style={{ width: '40vw', height: '60px', border: '1px solid black' }}>Flag Details</Col>
      </Row>
    </Container>
  )
}

export default Flag
