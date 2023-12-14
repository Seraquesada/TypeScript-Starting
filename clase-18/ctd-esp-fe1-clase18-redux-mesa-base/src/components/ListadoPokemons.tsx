import React, { useEffect } from "react";
import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import { buscarPokemons } from "../queries/pokemon.queries";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useQuery } from "react-query";
import { allPokemons } from "../redux/slice";

const ListadoPokemons = () => {
  const {
    data: pokemons,
    isLoading,
    refetch,
  } = useQuery("obtenerPokemons", () => buscarPokemons(pokemonSearch));
  /*
  - La constante pokemonSearch debe traerse de Redux el estado de busqueda (state.busqueda) para que lo pueda utilizar useQuery
  - La función fetchPokemon debe despachar allPokemons pasanddole los pokemons que llegan desde useQuery;
  */

  const pokemonSearch; /*Tu código acá */
  const fetchPokemon = () => {/*Tu código acá */};


  useEffect(() => {
    if (pokemonSearch) refetch();
    fetchPokemon();
  }, [pokemonSearch, pokemons]);

  if (isLoading) return <div> Loading... </div>;

  return <ListadoPokemonsItem />;
}

export default ListadoPokemons;
