import Home from './components/home'
import Red from './components/red'
import Blue from './components/blue'
//import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
function App() {


  return (
    <>
      <div id="container">
        
        <div id="navbar">
          <Link to="/">home</Link>
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
          </div>
      </div>
    </>
  )
}

export default App
