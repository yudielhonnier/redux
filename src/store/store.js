// import reducer from "../reducers";
import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from "redux";
// import contadorReducer from "../reducers/contadorReducer";
import contadorReducer from "./slices/contador/contadorSlice";
import pokemonReducer from './slices/pokemons/pokemonsSlice';

//old version
// const store=createStore(reducer)


// new version
export const store = configureStore({
    reducer: {
        contador: contadorReducer,
        pokemon: pokemonReducer
    }
})
