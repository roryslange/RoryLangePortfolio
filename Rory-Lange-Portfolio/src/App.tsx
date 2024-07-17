import React from 'react'
import About from './components/About';
import Nav from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <div className='flex-col h-screen bg-background text-secondary'>
        <Nav />
        <div className='inset-y-20 px-[10%] py-[5%]'>
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
