import car from '../../../../public/images/page-img.png'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function details_header() {
  return (
    <div>
        <div className="header">
        <img src={car} alt="car_details" />
        </div>
        <FontAwesomeIcon icon="fa-solid fa-link" style={{color: "#ffffff",}} />
    </div>
  )
}
