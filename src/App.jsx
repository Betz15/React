import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Owner from './pages/Owner'
import Productos from './pages/Productos'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Owner' element={<Owner/>} />
        <Route path='/Productos' element={<Productos/>} />
      </Routes>
    </>
  )
}

export default App
