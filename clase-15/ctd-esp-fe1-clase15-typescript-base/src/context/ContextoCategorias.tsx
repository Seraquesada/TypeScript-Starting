import React, { useReducer } from "react";

// Debemos tipar nuestro estado inicial.

interface InitialState  {
    categoriaSeleccionada: {

    },
};

const initialState: InitialState = {
    categoriaSeleccionada:{}
}

interface Action{
    type: string,
    payload: object
};

interface Reducer extends Action,InitialState{}

const reducer = (state : InitialState, action : Action) => {
    // Implementar el reducer
    switch(action.type){
        
    }
};

export const ContextoCategorias = React.createContext();

const ProviderCategorias = ({ children }) => {

    const [categoriasState, dispatch] = useReducer<Action,InitialState>(reducer, initialState);

    // Debemos tipar la siguiente funcion que carga las categorias
    const seleccionarCategoria = (categoria : string) => {
        dispatch({
            type: 'SELECCIONAR_CATEGORIA',
            payload: {
                categoria
            }
        });
    };

    return (
        <ContextoCategorias.Provider
            value={{
                categoriasState,
                seleccionarCategoria,
            }}
        >
            {children}
        </ContextoCategorias.Provider>
    );
};

export default ProviderCategorias;

