import React from 'react';
import {PokemonContext} from '../App';

export default function TotalPoke() {
const {totalPokemons,capture,addPokemos} = React.useContext(PokemonContext);
const a = 5;
React.useEffect(() => {
    const fetchPokemons = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokemons = await data.json();
        addPokemos(pokemons.results);
    }
    fetchPokemons();
}, [a]);
return (
<div className = "pokemons-list">
    <h2>Pokemon List</h2>
    {totalPokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={capture(pokemon)}>+</button>
          </div>
        </div>)}
</div>
);
}