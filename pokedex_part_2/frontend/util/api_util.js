export function fetchAllPokemon() {
    $.ajax({
        method: 'GET',
        url: 'api/pokemon'
    });
}

// window.fetchAllPokemon = fetchAllPokemon;