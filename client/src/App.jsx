import { useState , createContext } from 'react'

import './App.css'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter , Routes , Route} from 'react-router-dom';

export const TaskContext = createContext();

function App() {

  const [tasks,setTasks] = useState("This is a Task from Home");

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
