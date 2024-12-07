import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

type Pokemon = {
  name: string;
  url: string;
};

export const usePokemonList = (searchTerm: string = '') => {

  return useQuery<Pokemon[]>({

    queryKey: ['pokemonList', searchTerm],

    queryFn: async () => {

      const { data } = await api.get('/pokemon?limit=50');

      const results = data.results as Pokemon[];

      return searchTerm

        ? results.filter((pokemon) =>

            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())

          )

        : results;
        
    },

  });

};
