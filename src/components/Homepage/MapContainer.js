import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const MapContainer = (props) => {
  return (
    <div>
      <Map
        google={props.google}
        style={{
          width: '89vw',
          height: '360px'
        }}
        containerStyle={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
        zoom={11}
        initialCenter={{
          lat: 38.820450,
          lng: -77.050552
        }}
      >
        <Marker />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
