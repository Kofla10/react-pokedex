import React, {useState, useEffect} from 'react'
import PokemonCard from './PokemonCard';
import '../css/PokeList.css'



export const PokeList = () => {

  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () =>{

    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

    const data = await resp.json();

    const createPokemonObject = async (results) =>{

      results.forEach(async (pokemon) => {
        console.log(`https://pokeapi.co/api/v2/pokemon/${ pokemon.name }`)
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
              // padStart(3,"0") rellana con los caracteres que se le pase
              <PokemonCard key       = { pokemonData.id }
                           id        = { pokemonData.id.toString().padStart(3,"0") }
                           names     = { pokemonData.name }
                           image     = { pokemonData.sprites.other["official-artwork"].front_default }
                           type      = { pokemonData.types[0].type.name }
                           width     = { pokemonData.weight }
                           height    = { pokemonData.height }
                           stats     = { pokemonData.stats.map( (stat) => stat.base_stat ).slice(0, 3) }
                           statsName = { pokemonData.stats.map( (stat) => stat.name ).slice(0, 3) }
              />
            ))
          }
          </div>
        </div>
      </div>
    </>
  )
}
