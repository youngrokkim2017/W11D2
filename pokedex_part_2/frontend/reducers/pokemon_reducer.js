import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return Object.assign({}, state, action.pokemon);
        case RECEIVE_SINGLE_POKEMON:
            let singlePokemon = action.payload.pokemon;
            //???
            return Object.assign({}, state, { [singlePokemon.id]: singlePokemon });            
        default:
            return state;
    }


}

export default pokemonReducer;