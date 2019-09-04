function selectAllPokemon(state) {
    const pokemon = state.entities.pokemon;
    
    return Object.values(state.entities.pokemon);
}

export default selectAllPokemon;


// const initialState = getState();
// selectAllPokemon(initialState); //=> []

// dispatch(requestAllPokemon());

// const populatedState = getState();
// selectAllPokemon(populatedState); //=> array of pokemon objects!