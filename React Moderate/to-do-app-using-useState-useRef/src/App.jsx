import React from 'react'
import Heading from './components/Heading';
import Input from './components/Input';
import ItemList from './components/ItemsList';
const App = () => {
  const todoItems = [
    { name: "Buy Milk", date: "22/08/2024" },
    { name: "Goto College", date: "22/08/2024" },
    { name: "Like this video", date: "Right now." },
    { name: "Subscribe the channel", date: "Right now." },
  ];
  return (
   <>
   <div className='bg-slate-400 p-2'>
   <Heading />
   <Input />
   <ItemList />
   
   </div>
   </>
  )
}

export default App;