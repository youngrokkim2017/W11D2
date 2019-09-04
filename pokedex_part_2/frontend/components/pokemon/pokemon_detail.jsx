import React from 'react';

class PokemonDetail extends React.Component {
    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
    }

    render() {
        return (
            <ul className='pokedex'>
                {this.props.pokemon.map(pokemon => {
                    return <li key={pokemon.id}><img src={pokemon.image_url} alt="" />{pokemon.name}</li>
                })}
            </ul>
        )
    }


    // render() {
    //     const poke = this.props.poke
    //     console.log(poke)
    //     return (
    //         <div>
    //             {(poke && poke.moves) && <div>

    //                 <h3>{poke.name}</h3>
    //                 <ul>
    //                     <li>Type: {poke.poke_type}</li>
    //                     <li>Attack: {poke.attack}</li>
    //                     <li>Defense: {poke.defense}</li>
    //                     <li>Moves:
    //           <ul>
    //                             {poke.moves.map((move, idx) => <li key={idx} >{move}</li>)}
    //                         </ul>
    //                     </li>
    //                     <li>Items
    //           <ul>
    //                             {poke.items.map((item, idx) => <li key={idx}>{item}</li>)}
    //                         </ul>
    //                     </li>
    //                 </ul>
    //             </div>}
    //         </div>
    //     );
    // }

}

export default PokemonDetail;