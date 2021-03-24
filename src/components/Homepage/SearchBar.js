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
      height: '100vw'
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Col style={{ margin: 'auto' }}>
          <input type="text" placeholder='Search'
            style={{
              height: '40px',
              width: '50vw'
            }}
          />
        </Col>
        <Col>
          <GoSettings
            className='btn dropdown-toggle-bs'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
            size={60}
            style={{
              color: 'black',
              transform: 'rotate(-90deg)'
            }} />
          <div className="dropdown-menu drop-custom-css" aria-labelledby="dropdownMenuButton">
            <Filters/>
          </div>
        </Col>
      </div>
      <Row>
        <MapContainer />
      </Row>
    </Container>
  )
}

export default SearchBar
