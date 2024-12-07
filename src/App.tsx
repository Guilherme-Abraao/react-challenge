import React from 'react';
import { usePokemonList } from './hooks/usePokemonList';
import PokemonListItem from './components/PokemonListItem';

const App = () => {
  const { data, isLoading, error } = usePokemonList();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong: {error.message}</p>;

  if (!data) return <p>No Pokémon data available.</p>;

  return (

    <ul>

      {data.map((pokemon) => (
       
        <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        
      ))}

    </ul>

  );
};

export default App;
