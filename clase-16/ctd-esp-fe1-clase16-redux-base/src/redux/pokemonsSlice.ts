import { PokemonWithProps } from './../types/pokemon.types';
import { buscarPokemons, getPokemon } from './../queries/pokemon.queries';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../types/pokemon.types';

export interface PokemnonState{
    searchValue:string
}


const initialState: PokemnonState = {
    searchValue: "",
}
const pokemonsSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers:{
        buscarUnPokemon : (state, action:PayloadAction<string>)  => {
            state.searchValue = action.payload;
        },
        
    }
});

export const { buscarUnPokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;