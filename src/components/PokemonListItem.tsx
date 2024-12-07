import React from 'react';
import { usePokemonDetails } from '../hooks/usePokemonDetails';

type PokemonListItemProps = {
  name: string;
  url: string;
};

const PokemonListItem: React.FC<PokemonListItemProps> = ({ name, url }) => {
  const { data, isLoading, isError } = usePokemonDetails(url);

  if (isLoading) {

    return (

      <li className="flex items-center justify-center p-4 m-16 bg-gray-100 rounded-lg shadow-md">
        Carregando...
      </li>

    );

  }

  if (isError || !data) {

    return (

      <li className="flex items-center justify-center p-4 m-2 bg-gray-100 rounded-lg shadow-md">
        Erro ao carregar imagem
      </li>

    );

  }

  return (

    <li className="flex items-center p-4 mr-96 ml-96 m-2 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-200 min-w-[500px]">

      <img
        src={data.sprites.front_default}
        alt={name}
        className="w-16 h-16 rounded-full bg-slate-300 mr-4 duration-300 hover:bg-lime-950"
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
