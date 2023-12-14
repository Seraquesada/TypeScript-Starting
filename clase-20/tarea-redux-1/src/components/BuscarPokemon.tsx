import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { actionBusqueda, getPokemons } from "../redux/pokemonSlice";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";

const BuscarPokemon = () => {
    //Aqui deberemos almacenar en estados las entradas del usuario
    const [busqueda, setBusqueda] = useState("")
    
    const dispatch = useAppDispatch()


    const onBuscarClick = () => {
        // Aqui debemos guardar la entrada del usuario
        dispatch(actionBusqueda(busqueda))
        dispatch(getPokemons(busqueda))
    }

    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} onChange={(e) => setBusqueda(e.target.value)} />
                <button onClick={() => onBuscarClick()}>Buscar</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* ListadoPokemons debe recibir por props el name del pokemon a buscar */}
                <ListadoPokemons />
                <VistaPokemon />
            </div>
        </>
    );
}

export default BuscarPokemon;
