import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import bizData from '../../data/bizData'

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
        zoom={14}
        initialCenter={{
          lat: 38.820450,
          lng: -77.050552
        }}
      >
        {bizData.map((biz) => (
          <Marker key={biz.id}
            position={{
              lat: biz.lat,
              lng: biz.lon
            }}
          />
        ))}
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
