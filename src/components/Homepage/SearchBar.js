import React, { useState } from 'react'
import { Container, Col, Row, Modal, Button } from 'react-bootstrap'
import { GoSettings } from 'react-icons/go'
import Filters from './Filters'
import MapContainer from './MapContainer'

const SearchBar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container style={{
      border: '2px solid black',
      width: '90vw',
      height: '425px'
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: '12px 0'
        }}
      >
        <Col style={{ margin: 'auto -5px' }}>
          <h4>Zipcode</h4>
        </Col>
        <Col style={{ margin: 'auto -10px' }}>
          <input type="text" placeholder='Search'
            style={{
              height: '30px',
              width: '40vw',
              borderRadius: '5px',
              border: '1px solid rgba(0,0,0,0.2)'
            }}
          />
        </Col>
        <Col style={{ margin: 'auto -15px' }}>
          <GoSettings
            onClick={handleShow}
            type='button'
            size={30}
            style={{
              color: 'rgba(0,0,0,0.8)',
              transform: 'rotate(-90deg)'
            }} />
          <Modal show={show} onHide={handleClose}
            style={{
              width: '70vw',
              left: '15%',
              whiteSpace: 'nowrap'
            }}
          >
            <Modal.Header closeButton>
              <div
                style={{
                  display: 'block',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                <Modal.Title>Filters</Modal.Title>
                <h6>Types of Attractions</h6>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Filters/>
            </Modal.Body>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          </Modal>
        </Col>
      </div>
      <Row>
        <MapContainer />
      </Row>
    </Container>
  )
}

export default SearchBar
