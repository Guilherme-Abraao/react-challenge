import PokemonFullScreenMessage from './components/PokemonFullScreenMessage';
import { usePokemonList } from './hooks/usePokemonList';
import PokemonHome from './pages/PokemonHome';

const App = () => {
  const { data, isLoading, error } = usePokemonList();

  if (isLoading) {

    return (

        <PokemonFullScreenMessage
            message="Carregando..."
            backgroundColor="bg-red-600"
        />

    );

  }

  if (error || !data) {

    return (

        <PokemonFullScreenMessage
            message="Erro ao carregar Pokémon." 
            backgroundColor="bg-red-600"
        />

    );

  } 


  return (

    <div>

      <PokemonHome />
      
    </div>

  );

};

export default App;
