import { createSlice } from '@reduxjs/toolkit'

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: { page: 0, pokemons: [], isLoading: false },
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true
        },
        setPokemons: (state, actions) => {
            console.log(actions.payload.pokemons)
            state.pokemons = actions.payload.pokemons
            state.page = actions.payload.page
            state.isLoading = false
        },

    }
})
//actions creators
export const { startLoadingPokemons, setPokemons, } = pokemonSlice.actions
export default pokemonSlice.reducer

