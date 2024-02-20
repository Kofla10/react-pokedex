import React, { useState } from 'react'

import '../css/PokemonCard.css'
import pokeball from '../img/pokeball.png'



const PokemonCard = ({id, names, image, type, width, height, stats, statsName}) => {

  const [isShown, setIsShown] = useState(false)

  return (
    <>
        <div className="container">
          {
            isShown && (
              <div className="show">
                <div className="stat-container-title">
                  <p>{names}</p>
                  <img src={image} alt="" />
                </div>
              </div>
            )
          }

          <div className='right'
               onMouseEnter={() => setIsShown(true)} //funcion para cuando el mouse este en el area
               onMouseLeave={() => setIsShown(false)} //funcion para cuando el mouse salga del aera
                >
            <img src={image} alt={ names } style={ {maxHeight: "50px", marginRight: "10px", width: "50px"} }/>
            <p style={{width :"270px" }}> No. {id} </p>
            <p>{names}</p>
            <img src={ pokeball } alt="pokeball" style={{marginLeft: "auto", width: "40px"}} />
          </div>
        </div>
    </>
  )
}

export default PokemonCard
