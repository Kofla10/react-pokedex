import React from 'react'

import '../css/PokemonCard.css'



const PokemonCard = ({names, id, image, type}) => {
  return (
    <>
        <div className="container">
          <div className="show">
            <div className="stat-container-title">
            <p>{names}</p>
            <img src={image} alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default PokemonCard
