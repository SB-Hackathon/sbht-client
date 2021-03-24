import React from 'react'
import { BiTrophy } from 'react-icons/bi'

const Confirmation = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '5vw 0',
          textAlign: 'center'
        }}
      >
        <h2>Congrats!</h2>
        <div
          style={{
            border: '1px solid black',
            width: '50vw',
            height: '30vw'
          }}
        >
          <h1>OFFER</h1>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <BiTrophy size={25}/>
        <h5 style={{ marginLeft: '10px' }}>Points Earned</h5>
      </div>
    </div>
  )
}

export default Confirmation
