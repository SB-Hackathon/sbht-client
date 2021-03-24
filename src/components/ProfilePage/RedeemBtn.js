import React from 'react'
// import apiUrl from '../../apiConfig'

const RedeemBtn = () => {
  // const [points, setPoints] = useState('')

  // const onSubmit = () => {
  //   fetch(apiUrl, {
  //     method: 'POST',
  //     headers:{
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(points)
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPoints(data)
  //     })
  // }

  return (
    <form>
      <button type='submit'
        style={{
          borderRadius: '10px'
        }}
      >Redeem Offer</button>
    </form>
  )
}

export default RedeemBtn
