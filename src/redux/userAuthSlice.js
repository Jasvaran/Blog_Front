import { createSlice } from '@reduxjs/toolkit'

let initialState = { value: false }

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: initialState,
    reducers: {
        authenticate: (state, action) => {
            state.value = action.payload
        },

        unAuthenticate: (state) => {
            state.value = initialState
        }
    }
})

export const { authenticate, unAuthenticate} = userAuthSlice.actions

export default userAuthSlice.reducer