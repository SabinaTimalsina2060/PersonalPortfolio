import './App.css'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from './pages/Contact.jsx'
import Services from "./pages/Services.jsx"
function App() {
  return (
   <>
   <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  <Footer/>
     </BrowserRouter>
   </>
   
  )
}

export default App
