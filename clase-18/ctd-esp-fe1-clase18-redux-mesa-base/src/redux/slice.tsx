import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonsState {
  search: string;
  pokemon: Pokemon;
  allPokemons: any[];
}
const initialState: PokemonsState = {
  search: "",
  pokemon: { name: "", url: "" },
  allPokemons: [],
};
/*
  - El reducer buscarPokemon debe guardar en el estado de búsqueda (state.search) lo que le llegue por payload.
  - El reducer allPokemons debe pushear en el estado allPokemons todos los pokemons que le llegan por payload
*/
export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    searchAnPokemon: () => {
      
    },
    allPokemons: () => {

    },
  },
});

export const { allPokemons, searchAnPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
