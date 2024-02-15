import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard';



export const PokeList = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  
  const getAllPokemons = async () =>{

    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

    const data = await resp.json();
    
    const createPokemonObject = async (results) =>{
      
      results.forEach(async (pokemon) => {

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${ pokemon.name }`
        )

        const data = await res.json()

        setAllPokemons((currentLis) => [...currentLis, data] )
        allPokemons.sort((a,b) => a.id-b.id) //forma de organizar un arreglo
        
      });
    }

    createPokemonObject(data.results)
    
  }

  useEffect(() => {
    getAllPokemons()
  }, [])  

  return (
    <>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
          {
            allPokemons.map((pokemonData) =>(
              <PokemonCard key={ pokemonData.id } id={ pokemonData.id.toString() }/>             
            ))
          }
          </div>
        </div>
      </div>
    </>
  )
}
