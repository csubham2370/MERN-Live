let ToDo = ({todoName,todoDate, onDeleteClick}) =>{

  return(<>
 
  <div className=" px-3 py-2 min-w-[12.5rem]">{todoName}</div>
  <div className="px-3 py-2 min-w-[12.5rem]">{todoDate}</div>
  <div className="m-0 p-0"><button className="text-white bg-red-700 rounded  m-2 p-2  py-2.5 mt-1 ml-[33px]" onClick={() => {onDeleteClick(todoName)}}>Delete</button></div>
  
  </>)
}

export default ToDo;