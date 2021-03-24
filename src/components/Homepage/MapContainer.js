import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = (props) => {
  return (
    <div>
      <Map
        google={props.google}
        style={{
          width: '90vw',
          height: '350px'
        }}
        containerStyle={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
        zoom={10}
      />
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
