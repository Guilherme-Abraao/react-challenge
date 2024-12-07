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

    <li className="flex items-center pr-40  p-4 mx-40 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-200">
      
      <img
        src={data.sprites.front_default}
        alt={name}
        className="w-16 h-16 rounded-full bg-slate-300 mr-8 duration-300"
      />

      <p className="text-lg font-bold text-stone-800 capitalize">{name}</p>

    </li>

  );

};

export default PokemonListItem;
