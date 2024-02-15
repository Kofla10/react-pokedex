import React, {useState, useEffect} from 'react'

export const PokeList = () => {

  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () =>{
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0");

    const data = await resp.json();

    function createPokemonObject(results){
      results.array.forEach(async (pokemon) => {
        console.log('this is a test')
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon${ pokemon.name }`
        )

        const data = await res.json()

        setAllPokemons((currentLis) => [...currentLis, data] )
      });
    }
  }

  console.log(allPokemons)

  return (
    <div>PokeList</div>
  )
}
