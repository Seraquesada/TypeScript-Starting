import React, { useEffect} from "react";
import { useQuery } from "react-query";
import { getPokemon} from "../queries/pokemon.queries";


const VistaPokemon = () => {
  /*
  La constante pokemonSelect debe traerse el estado de búsqueda (state.search) para que getPokemon lo pueda utilizar
  */

  const pokemonSelect; /*Tu código acá */
  
  const {
    data: pokemon,
    isLoading,
    refetch,
  } = useQuery("obtenerPokemon", () => getPokemon(pokemonSelect || ""));

  useEffect(() => {
    if (pokemonSelect) {
      refetch();
    }
  }, [pokemonSelect]);

  if (isLoading) return <div>Loading</div>;

  return pokemon ? (
    <div className="vistaPokemon">
      <h4>Pokemon: {pokemon.name}</h4>
      <h5>#{pokemon.id}</h5>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    </div>
  ) : null;
}


export default VistaPokemon;
