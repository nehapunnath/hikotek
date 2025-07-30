import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import DistributorApply from './pages/DistributorApply'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/distributor' element={<DistributorApply/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
