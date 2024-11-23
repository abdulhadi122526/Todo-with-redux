import { createSlice, nanoid } from "@reduxjs/toolkit";




const todoSlice = createSlice ({
    name:  "Todos",
    initialState:{
        todos: [
            {
             title: "Hellow World",
             id: nanoid(),   
            },

        ]},  // initial value 

    reducers:{
        addTodo: (state , action)=>{
            state.todos.push({
                title: action.payload.title,
                id: nanoid(),
            })
        },
        removeTodo: (state , action)=>{
            
            state.todos.splice(action.payload.index, 1)
        },
        updateTodo: (state , action)=>{
            console.log(action.payload);
            
            state.todos.splice(action.payload.index, 1 , {
                title:action.payload.title
            })
           
        },
    }
})

export const { addTodo , removeTodo , updateTodo} = todoSlice.actions
export default todoSlice.reducer


