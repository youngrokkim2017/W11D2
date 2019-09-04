import React from 'react';

export default class PokemonIndex extends React.Component {
    componentDidMount() {
        this.props.requestAllPokemon;
    }

    render() {
        return (
            <ul className='pokedex'>
                {this.props.pokemon.map(pokemon => {
                    return <li key={pokemon.id}><img src={pokemon.image_url} alt=""/>{pokemon.name}</li>
                })}
            </ul>
        )
    }
}