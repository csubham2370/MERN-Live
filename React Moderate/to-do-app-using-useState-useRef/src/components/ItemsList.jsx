
import List from "./List";
const ItemList = () =>{

  const List =[{name: "Goto School", date: "12/10/2024"},{name: "Goto Gym", date: "12/10/2024"},{name: "Goto Home", date: "12/10/2024"}]

  return (<>

<div className=" flex ">
{List.map(li =>(

<List  itemName={li.name} itemDate={li.date}/>


))}

</div>




  
  </>)
}

export default ItemList;