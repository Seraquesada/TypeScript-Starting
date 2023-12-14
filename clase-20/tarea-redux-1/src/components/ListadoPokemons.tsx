import React, { useEffect, useState } from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import { buscarPokemons } from "../queries/pokemon.queries";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getPokemons, getSelectedPokemon } from "../redux/pokemonSlice";


/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 * </pre>
 * @param {string} name nombre del pokemon a buscar
 * @param seleccionarPokemon una funcion que se ejecuta al hacer click en el pokemon y guarda en un estado el pokemon seleccionado
 * @author Digital House
 */
const ListadoPokemons = () => {
    const dispatch = useAppDispatch()
    const pokemons = useAppSelector(state => state.pokemon.pokemons)

    useEffect(() => {
        //Deberan realizar la busqueda con la variable correspondiente
        dispatch(getPokemons(""))
    }, [])


    return (
        <div id="listadoCategorias">
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                    seleccionarPokemon={() => dispatch(getSelectedPokemon(pokemon.url))}
                    key={extractPokemonId(pokemon.url)} />
            ))}
        </div>
    );
}

export default ListadoPokemons;
