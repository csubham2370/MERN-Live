

const List =({itemName, itemDate}) =>{

  return(<>

<div className="bg-slate-200 px-4 py-2 mx-2 my-1 border-solid border-2 border-black h-10 w-[13.5rem] text-black">{itemName}

</div>

<div className="bg-slate-200 px-4 py-2 mx-0 my-1 border-solid border-2 border-black h-10 w-[10.9rem] text-black">{itemDate}

</div>
<button className="bg-red-500 m-1 ml-2 pr-1.5 p-2 font-bold rounded-sm">Delete</button>

  </>)
}

export default List;