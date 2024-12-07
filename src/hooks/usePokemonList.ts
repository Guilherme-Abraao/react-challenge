import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

type Pokemon = {
  name: string;
  url: string;
};

export const usePokemonList = () => {

  return useQuery<Pokemon[]>({

    queryKey: ['pokemonList'],

    queryFn: async () => {

      const { data } = await api.get('/pokemon?limit=50');
      return data.results;
      
    },

  });

};
