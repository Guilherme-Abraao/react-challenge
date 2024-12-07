import { usePokemonList } from './hooks/usePokemonList';
import PokemonHome from './pages/PokemonHome';

const App = () => {
  const { data, isLoading, error } = usePokemonList();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong: {error.message}</p>;

  if (!data) return <p>No Pokémon data available.</p>;

  return (
    <div>
      <PokemonHome />
    </div>

  );
};

export default App;
