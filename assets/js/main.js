const pokemonsOl = document.getElementById("pokemonsOl");
const loadMoreButton = document.getElementById("load-more-button");
const maxRecords = 151;
const limit = 5;
let offset = 0;

// chama pokeApi.getPokemons() e renderiza ele,
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons
            .map(
                (pokemon) => `
                    <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types
                                .map(
                                    (type) => `<li class="${type}">${type}</li>`
                                )
                                .join("")}
                        </ol>
                        <img
                            src="${pokemon.photo}"
                            alt="${pokemon.name}"
                        />
                    </div>
                </li>
                `
            )
            .join("");
        pokemonsOl.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
    offset += limit;

    const qntRecordNextPage = offset + limit;

    if (qntRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});
