import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: '',
    password: '',
    authenticate: false,
    role: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setAuthenticate: (state, action) => {
            state.authenticate = action.payload
        },
        setRole: (state, action) => {
            state.role = action.payload
        }
    }
})

export const { setUsername, setPassword, setAuthenticate, setRole} = usersSlice.actions
export default usersSlice.reducer