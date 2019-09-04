// export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

// export function receiveAllPokemon(pokemon) {
//     type: RECEIVE_ALL_POKEMON,
//     pokemon
// }

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

// export const receivePoke = poke => ({
//     type: RECEIVE_SINGLE_POKEMON,
//     poke
// })

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => (
    APIUtil.fetchSinglePokemon(id)
        .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
)

// window.receiveAllPokemon = receiveAllPokemon;
// window.requestAllPokemon = requestAllPokemon;