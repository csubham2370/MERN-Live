import { useReducer, useRef } from "react";

const counterReducer = (currentState, action) =>{

  console.log('In Reducer:'+currentState,action)

  let newState = currentState;
  
switch (action.type){

  case "Increment":
    newState+=1;
    break;

  case "Decrement":
    newState-=1;
    break;

  case "Reset":  
     newState=0;
     break;
  
  case "Double":
    newState *= 2;
    break

  case "Change By":
    newState +=parseInt(action.payload.num);
    break


}
  return newState;
 

}



const App = () =>{

 const [counterVal, counterDispatch] = useReducer(counterReducer, 0)

  const changeByInput = useRef()

 const handleIncrement = () =>{

  counterDispatch({type: "Increment"})


 };
 
 const handleDecrement = () =>{
 
  counterDispatch({type: "Decrement"})
   
 }

 const HandleChangeBy = () =>{

  const num = changeByInput.current.value;
  changeByInput.current.value = 0;

  counterDispatch({type: "Change By", payload:{num} })
 }
 

  return (<>
  
  <h1 className="text-3xl text-black p-2 font-serif">Count:{counterVal}</h1>
  <button className="bg-slate-400 border-2 border-black border-solid p-2 m-1 rounded-md" onClick={handleIncrement}>Increment</button>
  <button className="bg-slate-400 border-2 border-black border-solid p-2 m-1 rounded-md" onClick={handleDecrement}>Decrement</button>
  <button className="bg-slate-400 border-2 border-black border-solid p-2 m-1 rounded-md" 
  onClick={() =>{counterDispatch({type: "Reset"})}}>Reset</button>
  <button className="bg-slate-400 border-2 border-black border-solid p-2 m-1 rounded-md" onClick={() =>{counterDispatch({type: "Double"})}}>Double</button>
  <button className="bg-slate-400 border-2 border-black border-solid p-2 m-1 rounded-md" onClick={HandleChangeBy}>Change By</button>
  <input className="p-2 border-2 border-black" ref={changeByInput} />
  
  </>)
}

export default App;