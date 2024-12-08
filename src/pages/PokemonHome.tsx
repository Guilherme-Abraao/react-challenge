import React from 'react';
import PokemonListSearch from '../components/PokemonListSearch';
import pokemonLogo from '../assets/logo.webp'; 

const PokemonHome: React.FC = () => {

  return (

    <div className="min-h-screen bg-gray-100">

      <header className="text-center bg-red-600 text-white flex flex-col items-center border-b-8 border-y-zinc-800">

        <img
          src={pokemonLogo}
          alt="Pokemon Logo"
          className="w-80 h-auto" 
        />

      </header>

      <PokemonListSearch />

    </div>
  );
};

export default PokemonHome;
