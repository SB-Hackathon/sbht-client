import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { BiTrophy } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io5'
import { CgDollar } from 'react-icons/cg'
import RedeemBtn from './RedeemBtn'

const OfferCard = () => {
  return (
    <Card
      style={{
        margin: 'auto',
        width: '90vw',
        alignItems: 'center'
      }}
    >
      {/* This should be dynamic */}
      <h2>Alberts Museum</h2>
      <Card
        style={{
          margin: 'auto',
          position: 'relative',
          width: '50%',
          height: '20vw',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h4>OFFER</h4>
      </Card>
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
            <BiTrophy size={20} />
          </div>
          <div>
            <h6 style={{ overflow: 'nowrap' }} >Points Offered</h6>
          </div>
        </Row>
        <Row>
          <div style={{ marginRight: '10px' }}>
            <IoLocationOutline size={20} />
          </div>
          <div>
            <h6>Location</h6>
          </div>
        </Row>
        <Row>
          <div style={{ marginRight: '10px' }}>
            <CgDollar size={20} />
          </div>
          <div>
            <h6>Price</h6>
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

export default OfferCard
