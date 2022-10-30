import { createSlice } from '@reduxjs/toolkit'

const contadorSlice = createSlice({
    name: 'contador',
    initialState: { contador: 10 },
    reducers: {
        increment: (state) => {
            state.contador += 1
        },
        decrement: (state) => {
            state.contador -= 1
        },
        incrementBy: (state, actions) => {
            console.log(actions)
            state.contador += actions.payload
        },
        decrementBy: (state, actions) => {
            state.contador -= actions.payload
        },
        reset: (state) => {
            state.contador = 0
        },

    }
})

//actions creators
export const { increment, decrement, incrementBy, decrementBy, reset } = contadorSlice.actions
export default contadorSlice.reducer

