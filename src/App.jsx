import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './static/css/App.css'
import {SendButton1} from './components/SendButton'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
function App() {


  return (
    <>
      <Navbar/>
      <Router>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}/>

        </Routes>

      </Router>
    
    </>
  )
}

export default App
