import React from "react";
import PropTypes from "prop-types";
import {PokemonWithProps} from "../types/pokemon.types";
import {Sprite} from "../types/sprite.types";
import { useAppSelector } from "../hooks/useDispatchHook";
import { useQuery } from "react-query";
import { getPokemon } from "../queries/pokemon.queries";


interface Props{
    pokemonSeleccionado: () => string;
}

const pokemonMock: PokemonWithProps = {
    id: 4,
    name: 'Charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/',
    sprites: {
        "default": 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        other: {home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png'}}
    } as Sprite

}


/**
 * Visualiza un pokemon seleccionado
 *
 * @param {string} pokemonSeleccionado pokemon almacenado con la funcion seleccionarPokemon
 * @author Digital House
 */

const VistaPokemon = ({pokemonSeleccionado} : Props) => {

    //EXTRA: Pueden manejar el proceso de vista de un pokemon seleccionado pasando por props una funcion
    //que almacene en un estado el componente seleccionado y con el name de dicho pokemon hacer el fetch dentro de este 
    //componente de vista

    const searchValue = String(useAppSelector(state => state.pokemons.searchValue))

    const {data : pokemon, isLoading,isFetching, isSuccess} = useQuery(["pokemon",pokemonSeleccionado()], () => getPokemon(pokemonSeleccionado()));

    console.log(isLoading,isFetching, isSuccess)

    return (isFetching && isSuccess) ? (
        <div className="vistaPokemon">
            <h4>Pokemon: {pokemonMock.name}</h4>
            <h5>#{pokemonMock.id}</h5>
            <img src={pokemonMock.sprites.other.home.front_default} alt={pokemonMock.name} />
        </div>
    ):
    <div className="vistaPokemon">
        <h4>Pokemon: {pokemon?.name}</h4>
        <h5>#{pokemon?.id}</h5>
        <img src={pokemon?.sprites.other.home.front_default} alt={pokemon?.name} />
    </div>;
}

VistaPokemon.propTypes = {
    item:
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
};

export default VistaPokemon;
