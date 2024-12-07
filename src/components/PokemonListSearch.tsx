import React, { useState } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import PokemonListItem from './PokemonListItem';
import searchIcon from '../assets/search.svg';

const PokemonListSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const { data, isLoading, isError } = usePokemonList();

    const filteredPokemon = data?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (isError || !data) {
        return <div>Erro ao carregar Pokémon.</div>;
    }

    const handleClick = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSearchClick = () => {
        setIsFocused(true);
    };

    return (
        <div className="flex flex-col pt-20 items-center min-h-screen w-full bg-gray-200">

            <div className="sticky top-0 z-10 bg-gray-200 flex justify-center p-2">

                <div className="relative ">

                    <input
                        type="text"
                        placeholder="Pesquise Pokémon..."
                        value={searchTerm}
                        onChange={handleSearch}
                        onClick={handleClick}
                        onBlur={handleBlur}
                        className="mb-4 p-2 w-[500px] border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />

                    {(!searchTerm && !isFocused) && (

                        <img
                            src={searchIcon}
                            alt="search"
                            className="absolute right-2 top-5 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                            onClick={handleSearchClick}
                        />

                    )}

                </div>

            </div>

            <ul className="space-y-4 mt-8">

                {filteredPokemon?.map((pokemon) => (

                    <PokemonListItem key={pokemon.name} name={pokemon.name} url={pokemon.url} />

                ))}

            </ul>

        </div>
    );
};

export default PokemonListSearch;
