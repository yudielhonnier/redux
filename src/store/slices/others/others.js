import { createSlice } from '@reduxjs/toolkit'

const contadorSlice = createSlice({
    name: 'contador',
    initialState: { contador: 10 },
    reducers: {
        increment: (state) => {
            state.contador += 1
        },
        incrementBy: (state, actions) => {
            console.log(actions)
            state.contador += actions.payload
        },

    }
})
//actions creators
export const { increment, incrementBy, } = contadorSlice.actions
export default contadorSlice.reducer