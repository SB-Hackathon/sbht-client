import React, { useState, useEffect } from 'react'
import { withRouter, useLocation } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'
import { BiTrophy } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io5'
import { CgDollar } from 'react-icons/cg'
import RedeemBtn from './RedeemBtn'
import bizData from '../../data/bizData'

const OfferCard = (props) => {
  const location = useLocation()
  const [biz, setBiz] = useState('')

  useEffect(() => {
    bizData.map((sBiz) => {
      if (props.match.params.id === sBiz.ID) {
        setBiz(sBiz)
      } else {
        setBiz('')
      }
    })
  }, [props.match.params.id])

  console.log(location)
  console.log(biz)
  return (
    <Card
      style={{
        margin: 'auto',
        width: '90vw',
        alignItems: 'center'
      }}
    >
      <h2>blabla</h2>
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

export default withRouter(OfferCard)
