import React from 'react'
import { BiTrophy, BiUser } from 'react-icons/bi'
import Confirmation from './Confirmation'
import OfferList from './OfferList'

const ProfileContainer = () => {
  return (
    <div>
      <Confirmation />
      <hr
        style={{
          width: '90vw',
          margin: '10vw auto',
          border: '1px solid black'
        }}/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90vw',
          justifyContent: 'space-around'
        }}
      >
        <div>
          <BiUser size={40} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '10px'
          }}
        >
          <BiTrophy size={20} />
          <h6 style={{ marginLeft: '10px' }}>Total Points:</h6>
        </div>
      </div>
      <div
        style={{
          margin: '5vw 0 0 5vw'
        }}
      >
        <h6>Points redeemable at...</h6>
      </div>
      <OfferList />
    </div>
  )
}

export default ProfileContainer
