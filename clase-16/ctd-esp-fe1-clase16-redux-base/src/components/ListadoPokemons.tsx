import React, {useEffect, useState} from "react";
import ListadoPokemonsItem from "./ListadoPokemonsItem";
import {buscarPokemons} from "../queries/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";
import { useAppSelector } from "../hooks/useDispatchHook";
import { useQuery } from "react-query";


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
    

    const searchValue = String(useAppSelector(state => state.pokemons.searchValue))

    const {data:pokemons, isLoading} = useQuery(["pokemons", searchValue], () => buscarPokemons(searchValue));


    if (isLoading) return <div>Cargando pokemons...</div>

    return (
        <div id="listadoCategorias">
            {pokemons && pokemons?.map((pokemon : Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                                    seleccionarPokemon={() => {}}
                                    key={extractPokemonId(pokemon.url)}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
