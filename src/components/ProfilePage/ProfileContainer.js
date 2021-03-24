import React from 'react'
import OfferCard from './OfferCard'
import OfferList from './OfferList'

const ProfileContainer = () => {
  return (
    <div>
      <OfferCard />
      <div
        style={{
          margin: '5vw 0 0 5vw'
        }}
      >
        <h6>You might also like...</h6>
      </div>
      <OfferList />
    </div>
  )
}

export default ProfileContainer
