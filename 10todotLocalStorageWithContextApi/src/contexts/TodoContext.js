import React,{createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        },
        // {},{} 
    ],
    addTodo: (todo) => {},
    // update todo from key and value
    updateTodo: (id,todo) => {},   
    // delete todo from key and value
    deleteTodo: (id) => {},
    toggleComplete: () => {}
},)

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 