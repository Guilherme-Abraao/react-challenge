import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type PokemonDetails = {
  sprites: {
    front_default: string;
  };
  abilities: Ability[];  
};


export const usePokemonDetails = (url: string) => {

  return useQuery<PokemonDetails, Error>({

    queryKey: [url],

    queryFn: async () => {

      const { data } = await api.get(url);
      return data;
      
    },

  });

};
