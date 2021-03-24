import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { GoSettings } from 'react-icons/go'
import Filters from './Filters'
import MapContainer from './MapContainer'

const SearchBar = () => {
  return (
    <Container style={{
      border: '1px solid black',
      width: '90vw',
      height: '410px',
      margin: 'auto'
    }}>
      <Row style={{ marginBottom: '30px' }}>
        <Col>
          <input type="text" placeholder='Search' />
        </Col>
        <Col>
          <GoSettings
            className='btn dropdown-toggle-bs'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            size={50}
            style={{
              color: 'black',
              transform: 'rotate(-90deg)'
            }} />
          <div className="dropdown-menu drop-custom-css" aria-labelledby="dropdownMenuButton">
            <Filters />
          </div>
        </Col>
      </Row>
      <Row>
        <MapContainer />
      </Row>
    </Container>
  )
}

export default SearchBar
