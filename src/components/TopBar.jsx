import React from 'react'

import '../css/TopBar.css'

import pokeball from '../img/pokeball.png'
import pokeballcolor from '../img/pokeballcolor.png'

export const TopBar = () => {
  return (
    <>
    <div className="title">
      <p>Pokédex</p></div>
      <div className="caught-seen">
        <div className="caught">
          <img src={pokeballcolor}
               alt="pokeball"
               style={{width:"30px", marginRight:"20px"}}
               />
               <p>348</p>
        </div>
        <div className="seem">
          <img src={ pokeball }
               alt = "pokeball" 
               style={ { width:"30px", marginRight:"10px" } }
                />
                <p>649</p>
        </div>
        <p style={{color:"white"}} > A - &gt; Z</p>
      </div>
    </>

  )
}
