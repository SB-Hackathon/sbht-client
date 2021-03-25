import React from 'react'
import Flag from './Flag'
import bizData from '../../data/bizData'

import { Row } from 'react-bootstrap'
import SearchBar from './SearchBar'

const Homepage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Row style={{
        margin: 'auto'
      }}>
        <SearchBar />
      </Row>
      <div>
        {bizData.map((biz) => (
          <Flag biz={biz} key={biz.ID} />
        ))}
      </div>
    </div>
  )
}

export default Homepage
