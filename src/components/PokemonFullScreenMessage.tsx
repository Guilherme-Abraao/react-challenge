import React from 'react';
import pokemonLogo from '../assets/logo.webp';

type PokemonFullScreenMessageProps = {
    message: string;
    backgroundColor: string;
};

const PokemonFullScreenMessage: React.FC<PokemonFullScreenMessageProps> = ({ message, backgroundColor }) => {
    
    return (

        <div
            className={`flex flex-col items-center justify-center min-h-screen ${backgroundColor} text-white`}
        >

            <img src={pokemonLogo} alt="Pokémon Logo" className="w-96 h-auto" />

            <p className="text-xl font-bold">{message}</p>

        </div>

    );
    
};

export default PokemonFullScreenMessage;
