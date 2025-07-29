import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
