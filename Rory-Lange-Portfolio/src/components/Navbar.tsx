import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <nav className=''>
            <div className='sticky py-5 top-0 w-screen bg-card shadow-xl items-center'>
                <ul className='flex gap-4 justify-center'>
                    <li className='flex rounded-lg p-2'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/">home</Link>
                    </li>
                    <li className='flex rounded-lg p-2'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/About">timeline</Link>
                    </li>
                    <li className='flex rounded-lg p-2'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/Projects">projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav