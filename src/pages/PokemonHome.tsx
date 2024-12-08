import React from 'react';
import PokemonListSearch from '../components/PokemonListSearch';

const PokemonHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="text-center py-6 bg-blue-600 text-white">

        <h1 className="text-3xl font-bold">Pokedex</h1>

      </header>

      <PokemonListSearch />
      
    </div>
  );
};

export default PokemonHome;
