import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

type PokemonDetails = {
  sprites: {
    front_default: string; 
  };
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
