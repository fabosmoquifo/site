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
      <Route path='/site' element={<Home/>}/>
      <Route path='/site/Fabo' element={<Fabo/>}/>
      <Route path='/site/F329' element={<F329/>}/>
      <Route path='/site/Preturbado' element={<Preturbado/>}/>
      <Route path='/site/Gaymes' element={<Gaymes/>}/>
      <Route path='/site/Apoia' element={<Apoia/>}/>
      <Route path="*" element={<Erro/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App