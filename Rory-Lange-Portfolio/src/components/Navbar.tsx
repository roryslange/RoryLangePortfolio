import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <nav className=''>
            <div className='sticky py-5 top-0 w-screen bg-card shadow-xl items-center'>
                <ul className='flex gap-4 justify-center'>
                    <li className='flex rounded-lg w-[5%]'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/">Home</Link>
                    </li>
                    <li className='flex rounded-lg w-[5%]'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/About">Timeline</Link>
                    </li>
                    <li className='flex rounded-lg w-[5%]'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/Projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav