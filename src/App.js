import React from 'react';
import logo from './logo.svg';
import TotalPokemon from './components/TotalPokemon';
import CapturedPokemon from './components/capturedPokemon';
import AddPokemon from './components/AddPokemon';
import './App.css';


export const PokemonContext = React.createContext();

function PokemonProvider({children}) {
  const initState = {
    totalPokemons : [],
    capturedPokemons : []
  };
  const [state,dispatcher] = React.useReducer(pokemonReducer,initState);
  const capture = (pokemon) => () => {dispatcher({ type : 'CAPTURE' , poke : pokemon})};
  const release = (pokemon) => () => {dispatcher({ type : 'RELEASE' , poke : pokemon})};
  const addPokemon = (pokemon) => {dispatcher({ type: 'ADD', poke : pokemon });};
  const addPokemos = (pokemons) => {dispatcher({ type : 'ADD_ALL', poke : pokemons})};
  const contextval = {
  capture ,
  release ,
  addPokemon,
  addPokemos,
  totalPokemons : state.totalPokemons,
  capturedPokemons : state.capturedPokemons
  };
  return <PokemonContext.Provider value={contextval}>
    {children}
  </PokemonContext.Provider>
} 
function capturePokemon(state,capPokemon) {
  return {
    totalPokemons : state.totalPokemons.filter(pokemon => capPokemon !== pokemon),
    capturedPokemons : [...state.capturedPokemons, capPokemon]
  }
}
function relaesePokemon(state,relPokemon) {
  return {
    totalPokemons : [...state.totalPokemons, relPokemon],
    capturedPokemons : state.capturedPokemons.filter(pokemon => pokemon !== relPokemon)
  }
}
const addPokemon = (state,pokemon) => ({
  ...state,
  totalPokemons: [...state.totalPokemons, pokemon],
});
const addPokemons = (state,pokemons) => ({
  ...state,
  totalPokemons : pokemons
});
function pokemonReducer(state,action) {
  switch (action.type) {
    case 'CAPTURE' : return capturePokemon(state,action.poke);
    case 'RELEASE' : return relaesePokemon(state,action.poke);
    case 'ADD' : return addPokemon(state,action.poke);
    case 'ADD_ALL' : return addPokemons(state,action.poke);
    default : return state
  }
}
export function App() {
  return (
   <PokemonProvider>
     <TotalPokemon />
     <CapturedPokemon />
     <AddPokemon />
   </PokemonProvider>
  );
}
