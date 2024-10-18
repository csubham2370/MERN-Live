import { createContext, useReducer } from "react";
import  { useState } from 'react'
import Data from './Data';

const TodoItemsReducer = (currentItems, action) => {
  switch(action.type) {
    case 'ADD': {
      const todoText = action.payload.todoText;
      const todoDate = action.payload.todoDate;
      console.log(todoText, todoDate)
      return [...currentItems, { id: todoText, name :todoText,date: todoDate }];
    }
    case 'DELETE_ITEM':
      return currentItems.filter(item => item.id !== action.payload.todoId);
    default:
      return currentItems;  
  }
}

export default TodoItemsReducer;

  export const TodoItemsContext = createContext();

  export const TodoItemProvider = ({children}) =>{

    // const [todoItems, setTodoItems] = useState(Data)

    const [todoItems, dispatch] = useReducer(TodoItemsReducer, Data);

    const addTodoItem = (todoText, todoDate) =>{

      dispatch({
      type: "ADD",
      payload:{todoText,todoDate}
     })
  
    }
  
    const deleteItems = (todoId) =>{
  
      dispatch({
        type: "DELETE",
        payload:{todoId: todoId}
       })
    }


    return (<TodoItemsContext.Provider value={{todoItems, addTodoItem, deleteItems}}>
      {children}
    </TodoItemsContext.Provider>)

  }