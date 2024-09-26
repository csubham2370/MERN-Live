import { useState } from "react";

let AddTodo = ({onNewItem}) =>{

  const [todoName,setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const isDisabled = todoName.trim() === "" || todoDate.trim() === "";

  const handleNameChange = (event) =>{

    setTodoName(event.target.value);
  }

  const handleDateChange = (event) =>{

    setTodoDate(event.target.value);



  }

   


  const handleAddButton = () =>{

    if (isDisabled) {
      alert("Please fill in both the item name and due date.");
      return; // Prevent further execution if fields are empty
    }
    else{
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }
}

 


  return(

    <>
  
   <div className="grid grid-cols-3 gap-4 mt-4 ">
  <div><input type="text" placeholder="Enter work" value={todoName} onChange={handleNameChange} className=" mt-1 block w w-full px-3 py-2  bg-white border border-slate-300 rounded-md focus:outline-none  focus:border-sky-500"
    /></div>
  <div><input type="date" value={todoDate} onChange={handleDateChange} className="mt-1 block w w-full px-3 py-2  bg-white border border-slate-300 rounded-md focus:outline-none  focus:border-sky-500"
    /></div>
  <div><button   onClick={handleAddButton}  className="text-white bg-green-700 rounded px-4 py-2.5 mt-1 ml-[5px]">Add</button></div>
</div>

    
    
    </>
  )
}

export default AddTodo;