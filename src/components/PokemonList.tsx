import React from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import PokemonListItem from './PokemonListItem';

const PokemonList: React.FC = () => {
  const { data, isLoading, isError } = usePokemonList();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError || !data) {
    return <div>Erro ao carregar Pokémon.</div>;
  }

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">

      <ul>

      {data.map((pokemon) => (

        <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        
      ))}

      </ul>

    </div>

  );

};

export default PokemonList;