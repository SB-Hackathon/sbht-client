import React from 'react'
import { Link } from 'react-router-dom'

const Flag = (props) => {
  return (
    <Link to={{
      pathname: `/${props.biz.ID}`,
      state: { biz: props.biz }
    }}
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '90vw',
      height: '30vw',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px auto',
      border: '1px solid black',
      borderRadius: '5px',
      backgroundColor: 'white'
    }}
    >
      <div>
        <h6
          style={{
            marginTop: '10px'
          }}
        >{props.biz.name}</h6>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <div>
          <img src={props.biz.image} alt="thumbnail" width='80px' style={{ padding: '5px' }}/>
        </div>
        <div>
          <div
            style={{
              textDecoration: 'underline',
              fontSize: '16px',
              padding: '5px 10px'
            }}
          >Visit today to earn 50 Points!</div>
          <div
            style={{
              fontSize: '16px',
              padding: '5px 10px'
            }}
          >{props.biz.address}</div>
        </div>
      </div>
    </Link>
  )
}

export default Flag
