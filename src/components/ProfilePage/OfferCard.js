import React from 'react'
import { withRouter, useLocation } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'
import { FaTrophy } from 'react-icons/fa'
import { BsGeoAlt } from 'react-icons/bs'
import { HiCurrencyDollar } from 'react-icons/hi'
import { FcGlobe, FcPhone } from 'react-icons/fc'
import RedeemBtn from './RedeemBtn'

const OfferCard = () => {
  const location = useLocation()

  console.log(location)
  return (
    <Card
      style={{
        position: 'relative',
        margin: 'auto',
        width: '90vw',
        alignItems: 'center'
      }}
    >
      <h2>{location.state.biz.name}</h2>
      <div>
        <img src={location.state.biz.image} alt=""
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '100px'
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          margin: '15px'
        }}
      >
        <Row>
          <div style={{ marginRight: '10px' }}>
            <FaTrophy size={20} style={{ color: 'gold' }} />
          </div>
          <div>
            <h6 style={{ overflow: 'nowrap' }} ><strong>Visit today to earn 50 Points!</strong></h6>
          </div>
        </Row>
        <Row>
          <div style={{ marginRight: '10px' }}>
            <FcGlobe size={20} />
          </div>
          <div>
            <h6>{location.state.biz.website}</h6>
          </div>
        </Row>
        <Row>
          <div style={{ marginRight: '10px' }}>
            <BsGeoAlt size={20} style={{ color: 'red' }} />
          </div>
          <div>
            <h6>{location.state.biz.address}</h6>
          </div>
        </Row>
        <Row>
          <div style={{ marginRight: '10px' }}>
            <FcPhone size={20} />
          </div>
          <div>
            <h6>{location.state.biz.phone}</h6>
          </div>
        </Row>
        <Row>
          <div style={{ marginRight: '10px' }}>
            <HiCurrencyDollar size={20} style={{ color: 'gold' }} />
          </div>
          <div>
            <h6>All tickets are 20% off 12pm to 2pm</h6>
          </div>
        </Row>
      </div>
      <div
        style={{
          margin: '0 0 20px 0'
        }}
      >
        <RedeemBtn />
      </div>
    </Card>
  )
}

export default withRouter(OfferCard)
