import React from 'react'
import { Container } from 'react-bootstrap'

const Flag = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90vw',
          justifyContent: 'space-between',
          margin: 'auto'
        }}
      >
        <div
          style={{
            width: '25%',
            height: '70px',
            border: '1px solid black'
          }}>Thumbnail</div>
        <div
          style={{
            width: '70%',
            height: '70px',
            border: '1px solid black',
            marginBottom: '1em'
          }}>Flag Details</div>
      </div>
    </Container>
  )
}

export default Flag
