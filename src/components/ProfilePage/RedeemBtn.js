import React from 'react'

const RedeemBtn = () => {
  const onSubmit = () => {
    fetch('url', {
      method: 'POST'
    })
      .then((res) => res.json())
  }

  return (
    <form onSubmit={onSubmit} >
      <button type='submit'
        style={{
          borderRadius: '10px'
        }}
      >Redeem Offer</button>
    </form>
  )
}

export default RedeemBtn
