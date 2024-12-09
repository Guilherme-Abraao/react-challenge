import React, { useState, useRef, useEffect } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import PokemonListItem from './PokemonListItem';
import searchIcon from '../assets/search.svg';

const PokemonListSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const { data, isLoading, isError } = usePokemonList();

    const listRef = useRef<HTMLUListElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredPokemon = data?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleMouseEnter = (index: number) => {
        setFocusedIndex(index);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {

        if (!filteredPokemon || filteredPokemon.length === 0) return;

        if (event.key === 'ArrowDown') {

            setFocusedIndex((prev) =>
                prev === null || prev === filteredPokemon.length - 1 ? 0 : prev + 1
            );

        }

        if (event.key === 'ArrowUp') {

            setFocusedIndex((prev) =>
                prev === null || prev === 0 ? filteredPokemon.length - 1 : prev - 1
            );

        }

        if (event.key === 'Enter' && focusedIndex !== null) {

            const selectedPokemon = filteredPokemon[focusedIndex];

            alert(`Selecionado: ${selectedPokemon.name}`);

        }
    };

    useEffect(() => {

        if (focusedIndex !== null && listRef.current) {

            const items = listRef.current.querySelectorAll('li');

            if (items[focusedIndex]) {
                (items[focusedIndex] as HTMLElement).focus();
            }

        }

    }, [focusedIndex]);

    useEffect(() => {

        const handleGlobalKeyDown = (event: KeyboardEvent) => {

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key === '/'
            ) {
                event.preventDefault();
                inputRef.current?.focus();
                setIsFocused(true);
            }

        };

        window.addEventListener('keydown', handleGlobalKeyDown);

        return () => window.removeEventListener('keydown', handleGlobalKeyDown);

    }, []);

    if (isLoading) {
        return <div className="text-center mt-10">Carregando...</div>;
    }

    if (isError || !data) {
        return <div className="text-center mt-10">Erro ao carregar Pokémon.</div>;
    }

    return (

        <div className="flex flex-col pt-8 items-center min-h-screen w-full bg-gray-200">
            
            <p className="text-3xl text-center text-gray-600 my-4">
                Bem-vindo(a) à Pokedex!
            </p>

            <div className="sticky top-0 z-10 bg-gray-200 flex justify-center p-4 w-full">
                
                <div className="relative w-full max-w-2xl px-4">
                    
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Pesquise Pokémon..."
                        value={searchTerm}
                        onChange={handleSearch}
                        onClick={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="mb-4 p-3 w-full border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    />

                    {(!searchTerm && !isFocused) && (

                        <img
                            src={searchIcon}
                            alt="search"
                            className="absolute right-6 top-7 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                            onClick={() => setIsFocused(true)}
                        />
                    
                    )}

                </div>

            </div>

            <ul
                ref={listRef}
                className="space-y-4 mt-4 px-4 w-full max-w-2xl"
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                {filteredPokemon?.map((pokemon, index) => (

                    <li
                        key={pokemon.name}
                        onMouseEnter={() => handleMouseEnter(index)}
                        className={`rounded-lg shadow-md hover:bg-gray-200 cursor-point ${
                            focusedIndex === index ? 'bg-gray-300' : ''
                        }`}
                        tabIndex={-1}
                    >

                        <PokemonListItem name={pokemon.name} url={pokemon.url} />

                    </li>

                ))}

            </ul>

        </div>

    );

};

export default PokemonListSearch;
