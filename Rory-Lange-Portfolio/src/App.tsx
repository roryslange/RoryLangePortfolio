import React from 'react'
import About from './components/About';
import Nav from './components/Navbar';



function App() {
  let page
  

  return (
    <>
      <div className='flex h-screen max-w-screen-2xl bg-background text-secondary'>
        
        <Nav />
        <About />
        
      </div>
    </>
  )
}

export default App
