import { createSlice, createAction  } from '@reduxjs/toolkit'

const addTodo = createAction('todo/addTodo')

const initialState = {}
export const todoListReducer = createSlice({
    name: 'todoListReducer',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(addTodo, (state, action) => {
            return state + action.payload
        })
    },
})