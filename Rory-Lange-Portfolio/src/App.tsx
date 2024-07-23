import React from 'react'
import About from './components/About';
import Nav from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <div className='flex-col bg-background text-secondary pb-[2.5%]'>
        <Nav />
        <div className='inset-y-20 mx-[10%] my-[5%] p-[2.5%] shadow-xl bg-card'>
          <Routes>
            <Route path='/About' element={<About/>} />
            <Route path='/Timeline' element={<Timeline/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Projects' element={<Projects/>} />
          </Routes>
        </div>
        
      </div>
    </>
  )
}

export default App
