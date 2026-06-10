export async function getPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  if (!response.ok) {
    throw new Error("Pokemon not found");
  }
  const data = await response.json();
  return data;
}

export async function addToTeam(pokemonName) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // JSON object to JSON string
      body: JSON.stringify({
        pokemon: pokemonName
      })
    }
  );
  const data = await response.json();
  return data;
}