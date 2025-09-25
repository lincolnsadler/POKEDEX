function convertPokemonToLi(pokemon) {
    return `
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
    `;
}

// pega elemento OL para adicionar o Li depois
const pokemonsOl = document.getElementById("pokemonsOl");

// chama pokeApi.getPokemons() e renderiza ele,
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonsOl.innerHTML += pokemons.map(convertPokemonToLi).join(" ");
});
