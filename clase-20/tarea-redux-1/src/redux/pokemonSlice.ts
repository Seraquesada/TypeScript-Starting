import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Pokemon, PokemonWithProps } from "../types/pokemon.types";


const apiPokemon = async (name: string) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    return data.results.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().startsWith(name.toLowerCase()))
}

export const getPokemons = createAsyncThunk(
    '/getPokemons',
    async (name: string) => {
        const response = await apiPokemon(name)
        return response
    }
)

export const getSelectedPokemon = createAsyncThunk(
    '/getSelectedPokemon',
    async (url: string) => {
        const response = await fetch(url);
        const data = await response.json();
        return data
    }
)

interface initialType {
    busqueda: string
    pokemons: never[]
    selectedPokemon: PokemonWithProps
}

const initialState: initialType = {
    busqueda: '',
    pokemons: [],
    selectedPokemon: {
        name: "",
        id: 0,
        url: "",
        sprites: {
            "default": "",
            other: {
                home: {
                    front_default: ""
                }
            }
        }
    }
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        actionBusqueda: (state, action) => {
            state.busqueda = action.payload
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getPokemons.fulfilled, (state, action) => {
            // Add user to the state array
            state.pokemons = action.payload
        })
        builder.addCase(getSelectedPokemon.fulfilled, (state, action) => {
            // Add user to the state array
            state.selectedPokemon = action.payload
        })
    },
})

export const { actionBusqueda } = pokemonSlice.actions


export default pokemonSlice.reducer