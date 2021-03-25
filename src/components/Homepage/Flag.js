import React from 'react'

const Flag = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '90vw',
        height: '30vw',
        justifyContent: 'space-between',
        margin: '10px auto',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'white'
      }}
    >
      <div>Thumbnail goes here</div>
      <div>Flag Details goes here</div>
    </div>
  )
}

export default Flag
