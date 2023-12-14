import React,{useRef,useState} from "react";
import { useAppDispatch } from "../hooks/useDispatchHook";

import { buscarUnPokemon } from "../redux/pokemonsSlice";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";

const BuscarPokemon = () => {
    //Aqui deberemos almacenar en estados las entradas del usuario
    const [pokemon, setpokemon] = useState<string>("")

    
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setpokemon(event.target.value)

    // Aqui debemos guardar la entrada del usuario
    const onBuscarClick = () => dispatch(buscarUnPokemon(pokemon))
        
    const pokemonSeleccionado = () =>{
        return pokemon;
    }
    
    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input onChange={handleChange} type="text" placeholder={"Pikachu, Charmander, Ditto, etc"}/>
                <button onClick={() => onBuscarClick()}>Buscar</button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                {/* ListadoPokemons debe recibir por props el name del pokemon a buscar */}
                <ListadoPokemons /> 
                <VistaPokemon pokemonSeleccionado={pokemonSeleccionado}/>
            </div>
        </>
    );
}

export default BuscarPokemon;
