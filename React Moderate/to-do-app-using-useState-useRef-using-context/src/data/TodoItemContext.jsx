import { createContext } from "react";
import  { useState } from 'react'
import Data from './Data';

  export const TodoItemsContext = createContext();

  export const TodoItemProvider = ({children}) =>{

    const [todoItems, setTodoItems] = useState(Data)

    const addTodoItem = (todoText, todoDate) =>{
  
      setTodoItems(currentItems =>{
        return [...currentItems,{id : todoText, name:todoText, date: todoDate }]
      })
    }
  
    const deleteItems = (todoId) =>{
  
      setTodoItems(currentItems =>{
        return currentItems.filter(item => item.id !== todoId)
      })
    }


    return (<TodoItemsContext.Provider value={{todoItems, addTodoItem, deleteItems}}>
      {children}
    </TodoItemsContext.Provider>)

  }