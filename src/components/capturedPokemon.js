import React from 'react';
import {PokemonContext} from '../App';

export default function CapturedPoke(props) {
    const {capturedPokemons,release} = React.useContext(PokemonContext);
    return (
        <div className="captured-pokemons">
          <h2>CapturedPokemons</h2>
    
          {capturedPokemons.map((pokemon) =>
            <div key={`${pokemon.id}-${pokemon.name}`}>
              <div>
                <span>{pokemon.name}</span>
                <button onClick={release(pokemon)}>-</button>
              </div>
            </div>)}
        </div>
      );
}