import React, {useState} from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import { searchAnPokemon } from "../redux/slice";


const BuscarPokemon: React.FC = () => {
  const [name, setName] = useState<string>("");
  /*
    La función Submit debe despachar "searchAnPokemon" con el name guardado en nuestro estado
   */
  const Submit = (e) => {
    /*Tu código acá */
  };

  return (
    <>
      <form onSubmit={Submit}>
        <div id="buscarPokemon">
          <label>Search Pokemon</label>
          <input
            type="text"
            placeholder={"Pikachu, Charmander, Ditto, etc"}
            onChange={(e) => setName(e.target.value)}
          />
          <button>Search</button>
        </div>
      </form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ListadoPokemons />
        <VistaPokemon />
      </div>
    </>
  );
}

export default BuscarPokemon;
