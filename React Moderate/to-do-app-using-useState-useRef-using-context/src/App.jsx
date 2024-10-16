
import Heading from './components/Heading';
import Input from './components/Input';
import ItemList from './components/ItemsList';
import { TodoItemProvider } from './data/TodoItemContext';

const App = () => {

  
  return (
   <>
 <TodoItemProvider>
   <div className='bg-slate-400 p-2'>
   <Heading />
   <Input  />
   <ItemList />
   
   </div>
   </TodoItemProvider>
   </>
  )
}

export default App;