import {TodoItemsContext}  from "../data/TodoItemContext"
import { useContext } from "react";
import Items from "./Items";
const ItemList = () =>{

 const   {todoItems}= useContext(TodoItemsContext)
 
  return (<>

<div className=" flex flex-col">
{todoItems.map((li) =>(

<Items key={li.id}  id={li.id} itemName={li.name} itemDate={li.date} />


))}

</div>




  
  </>)
}

export default ItemList;