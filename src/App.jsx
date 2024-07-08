import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar';
import Home from './components/home'
import Projects from './components/Projects'
import Contact from './components/contact'
import { Route, Routes} from "react-router-dom"


function App() {

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    
    </>
  )
}

export default App
