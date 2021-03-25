import React from 'react'

const ZipReq = () => {
  return (
    <div
      style={{
        width: '90vw',
        height: '100vh',
        margin: '50vw auto'
      }}
    >
      <h3>Type in your zipcode to find live flags in your area!</h3>
      <form>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto'
          }}
        >
          <input type="text" placeholder='e.g. 90210'
            style={{
              width: '40vw',
              height: '9vw',
              backgroundColor: 'white',
              borderRadius: '5px',
              border: '.5px solid rgba(0,0,0,0.3)',
              margin: '10px auto'
            }}
          />
          <button type='submit'
            style={{
              width: '30vw',
              height: '9vw',
              fontSize: '12px',
              backgroundImage: 'linear-gradient(170deg, white, white, yellow',
              borderRadius: '5px',
              border: '2px solid rgba(0,0,0,0.7)',
              margin: '10px auto'
            }}
          >
            <strong>Capture Deals!</strong>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ZipReq
