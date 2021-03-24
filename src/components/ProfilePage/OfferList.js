import React from 'react'

const OfferList = () => {
  const style = {
    width: '20vw',
    height: '20vw',
    marginTop: '20px',
    border: '1px solid rgba(0,0,0,0.2)'
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '90vw',
        margin: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <div style={style}>Offer 1</div>
      <div style={style}>Offer 2</div>
      <div style={style}>Offer 3</div>
    </div>
  )
}

export default OfferList
