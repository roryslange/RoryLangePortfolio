//import React from 'react' // removed because it was unable to build if value is not read
import About from './components/About';
import Nav from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <div className='flex-col min-h-screen bg-background text-secondary pb-[2.5%]'>
        <Nav />
        <div className='rounded-sm inset-y-20 mx-[10%] my-[5%] p-[2.5%] shadow-xl bg-card'>
          <Routes>
            <Route path='/' element={<About/>}/>
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
