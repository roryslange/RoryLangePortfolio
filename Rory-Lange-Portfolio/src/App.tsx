import React from 'react'
import About from './components/About';
import Nav from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom'



function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <About />
      break
    case "/Projects":
      component = <Projects />
  }

  return (
    <>
      <div className='flex bg-background text-secondary'>
        <Nav />
        <div>
          <Routes>
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Projects' element={<Projects/>} />
          </Routes>
        </div>
        
      </div>
    </>
  )
}

export default App
