import React from 'react'

import './Card.scss'
import pic from '../../assets/images/bottle.png'

const Card = () => {
  return (
    <div>
      <div className="p-card shadow-5">
        <img src={pic} alt="bottle" className="beer-image" />
        <h5>Beer Name</h5>
        <p>Beer Description... Lorem ipsum dolor sit amet.Beer Description... Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default Card;
