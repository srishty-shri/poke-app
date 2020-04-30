import React, { useContext, useState } from 'react';
import { PokemonContext } from '../App';

const generateID = () => {
    const a = Math
      .random()
      .toString(36)
      .substring(2, 15)
  
    const b = Math
      .random()
      .toString(36)
      .substring(2, 15)
  
    return a + b;
  };

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState();
  const { addPokemon } = useContext(PokemonContext);

  const handleNameOnChange = (e) => setPokemonName(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPokemonName('');
    addPokemon({
      id: generateID(),
      name: pokemonName
    });
  };

  return (
      <div>
        <h2>Add New Pokemon</h2>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="pokemon name" value={pokemonName} onChange={handleNameOnChange} />
            <input type="submit" value="Add" />
        </form>
    </div>
  );
};

export default PokemonForm;