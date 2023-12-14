
import React from "react";
import PropTypes from "prop-types";
import { extractPokemonId } from "../services/pokemon.services";
import { searchAnPokemon } from "../redux/slice";



const ListadoPokemonsItem = () => {
  /*
  - El div #listadoCategorias debe despachar "searchAnPokemon" pasandole el nombre del pokemon por parámetro
  - La constante data debe traerse del estado de Redux todos los pokemons (state.allPokemons)
   */

  const data; /*Tu código acá */

  return (
    <div>
      {data &&
        data?.map(function (pokemon: { name: string; url: string }) {
          return (
            <div
              id="listadoCategorias"
              onClick={() => {
                /*Tu códico acá */
              }}
            >
              <strong>{pokemon?.name}</strong>
              <small> #{extractPokemonId(pokemon?.url)}</small>
            </div>
          );
        })}
    </div>
  );
};

ListadoPokemonsItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default ListadoPokemonsItem;
