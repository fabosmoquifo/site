import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home'
import {Fabo} from './pages/Fabo'
import {F329} from './pages/F329'
import {Preturbado} from './pages/Preturbado'
import {Gaymes} from './pages/Gaymes'
import {Apoia} from './pages/Apoia'
import {Erro} from './pages/404'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Fabo' element={<Fabo/>}/>
      <Route path='/F329' element={<F329/>}/>
      <Route path='/Preturbado' element={<Preturbado/>}/>
      <Route path='/Gaymes' element={<Gaymes/>}/>
      <Route path='/Apoia' element={<Apoia/>}/>
      <Route path="*" element={<Erro/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App