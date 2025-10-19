
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './static/css/App.css'
import {SendButton1} from './components/SendButton'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import About from './pages/About'
import Services from './pages/Services'
import Footer from './components/Footer'
import CounterPage from './pages/CounterPage'
import ContactPage from './pages/ContactPage'




function App() {





  return (
    <>
      <Navbar/>




      <Router>

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/count'  element={<CounterPage/>}/>
          <Route path='/help'  element={<ContactPage/>}/>

        </Routes>

      </Router>
      <Footer/>
    
    </>
  )
}

export default App
