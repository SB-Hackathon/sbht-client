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
          borderRadius: '5px',
          backgroundImage: 'linear-gradient(170deg, white, white, yellow',
          width: '200px',
          height: '40px',
          fontSize: '14px'
        }}
      ><strong>Capture this offer NOW!</strong></button>
    </form>
  )
}

export default RedeemBtn
