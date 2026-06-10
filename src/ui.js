export function displayPokemon(data) {
  document.getElementById("pokemonName").textContent = data.name;
  document.getElementById("pokemonId").textContent =`#${data.id}`;
  document.getElementById("pokemonImage").src = data.sprites.front_default;
  const types = [];
  for (const pokemonType of data.types) {
    types.push(pokemonType.type.name);
  }
  document.getElementById("pokemonType").textContent =`Type: ${types.join(", ")}`;}