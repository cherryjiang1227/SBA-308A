import { getPokemon, addToTeam } from "./api.js";
import { displayPokemon } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const teamBtn = document.getElementById("teamBtn");
const searchInput = document.getElementById("pokemonSearch");
const team = document.getElementById("team");
const teamCount = document.getElementById("teamCount");
const message = document.getElementById("message");
let currentPokemon = "";
let pokemonTeam = [];
searchBtn.addEventListener("click", async () => {
    try {
      const pokemon = await getPokemon(searchInput.value);
      displayPokemon(pokemon);
      currentPokemon = pokemon.name;
      message.textContent = "";
    } catch (error) {
      message.textContent = "Pokemon not found";
    }
  }
);
teamBtn.addEventListener("click", async () => {
    if (!currentPokemon) {
      message.textContent = "Search for a Pokemon";
      return;
    }
    if (
      pokemonTeam.includes(currentPokemon)
    ) {
      message.textContent = "Pokemon already on team";
      return;
    }
    if (pokemonTeam.length >= 5) {
      message.textContent = "Team is full";
      return;
    }
    try {
      await addToTeam(currentPokemon);
      pokemonTeam.push(currentPokemon);
      const li = document.createElement("li");
      li.textContent = currentPokemon;
      team.appendChild(li); 
      teamCount.textContent = `(${pokemonTeam.length}/5)`;
      message.textContent = `${currentPokemon} added to team`;
    } catch (error) {
      message.textContent = "Pokemon cannot be added to the team";
    }
  }
);