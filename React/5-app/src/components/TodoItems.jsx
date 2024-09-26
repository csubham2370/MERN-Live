import ToDo from "./ToDo";
let TodoItems = ({Items, onDeleteClick}) =>{


  return(

    <>

      <div className=" grid grid-cols-3  mt-2  mr-7 ">
  {Items.map((item,index)=>(<ToDo key={index} todoName={item.name} todoDate={item.date}
    onDeleteClick={onDeleteClick}/>))}
</div>

    
    </>
  )
}

export default TodoItems;