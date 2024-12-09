import React from 'react';
import { usePokemonDetails } from '../hooks/usePokemonDetails';

type PokemonListItemProps = {
  name: string;
  url: string;
};

const PokemonListItem: React.FC<PokemonListItemProps> = ({ name, url }) => {
  const { data, isLoading, isError } = usePokemonDetails(url);

  if (isLoading || isError || !data) {

    const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'];

    const colorIndex = name.charCodeAt(0) % colors.length;

    const backgroundColor = colors[colorIndex];

    return (
      
      <li className="flex items-center p-4 mx-auto m-2 bg-gray-100 rounded-lg shadow-md w-full">
        
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full text-white text-lg font-bold ${backgroundColor} mr-4`}
        >

          {name
            .split(/[ -]/)
            .slice(0, 2)
            .map((word) => word[0]?.toUpperCase())
            .join('')}

        </div>

        <p className="text-lg font-bold text-stone-800 capitalize">

          {name
            .split(/[ -]/)
            .slice(0, 2)
            .map((word) => word[0]?.toUpperCase())
            .join('')}
          ...

        </p>

      </li>

    );

  }

  return (

    <li className="flex items-center p-4 mx-auto bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-full">
      
      <img
        src={data.sprites.front_default}
        alt={name}
        className="w-16 h-16 border-2 border-zinc-400 rounded-full bg-slate-200 mr-4 duration-300"
      />

      <div className="flex flex-col justify-between">
        
        <p className="text-lg font-bold text-stone-800 capitalize">{name}</p>

        <div className="flex flex-wrap gap-2">
          
          {data.abilities.map((ability, index) => (
            
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-semibold mt-3
                ${ability.is_hidden ? 'bg-gray-400 text-white' : 'bg-blue-500 text-white'}`}
            >

              {ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}

            </span>

          ))}

        </div>

      </div>

    </li>

  );

};

export default PokemonListItem;
