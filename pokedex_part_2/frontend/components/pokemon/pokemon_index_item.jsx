import React from 'react';

import { Link } from "react-router-dom";
import { link } from 'fs';

const PokemonIndexItem = () => {
    //???
    <li className="pokemon-index-item">
        <Link to={`/pokemon/${pokemon.id}`}>
            <span>{pokemon.id}</span>
            <span>{pokemon.name}</span>
            <span><img src="{pokemon.image_url" alt=""/></span>
        </Link>
    </li>
}

export default PokemonIndexItem;

// const pokemonItems = pokemon.map(poke => (
//     <PokemonIndexItem key={poke.id} pokemon={poke} />
// ));

// // And inside the render:
// <section className="pokedex">
//     <ul>{pokemonItems}</ul>
// </section>;