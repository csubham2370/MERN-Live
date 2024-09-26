import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

let App = () =>{

  // const todoItems = [
  //     { name: "Buy Milk", date: "22/08/2024" },
  //     { name: "Goto College", date: "22/08/2024" },
  //     { name: "Like this video", date: "Right now." },
  //     { name: "Subscribe the channel", date: "Right now." },
  //   ];
  
  const [todoItems, setdoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) =>{

    console.log(`New Item ${itemName} and Date ${itemDate}`);

    const newTodoItems = [...todoItems,{name:itemName, date:itemDate}]

    setdoItems(newTodoItems);

  }

  const handleDeleteItem = (itemName) =>{

    const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setdoItems(newTodoItems);
    console.log(`Item Deleted:${itemName}`);
  }

  return (

    <>
      <div class="flex  justify-center items-center flex-col p-5">
   <Heading />
   <AddTodo onNewItem={handleNewItem}/>
   {todoItems.length === 0 && <WelcomeMessage />}
   <TodoItems Items={todoItems} onDeleteClick={handleDeleteItem}/>
  

 
   </div>
    </>
    
  
  )
}

export default App;