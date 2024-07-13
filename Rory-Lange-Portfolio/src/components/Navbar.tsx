import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <nav className=''>
            <div className='sticky top-0 h-fit w-screen bg-card'>
                <ul className='flex gap-4 justify-center'>
                    <li className='flex rounded-lg w-[15%] bg-primary'>
                        <Link className='flex-auto rounded-lg items-center justify-center' to="/About">About</Link>
                    </li>
                    <li className='flex rounded-lg w-[15%] bg-primary'>
                        <Link className='flex-auto rounded-lg items-center justify-center' to="/Projects">Projects</Link>
                    </li>
                    <li className='flex rounded-lg w-[15%] bg-primary'>
                        <Link className='flex-auto rounded-lg items-center justify-center' to="/About">Personal</Link>
                    </li>
                    <li className='flex rounded-lg w-[15%] bg-primary'>
                        <Link className='flex-auto rounded-lg items-center justify-center' to="/About">Experience</Link>
                    </li>
                    <li className='flex rounded-lg w-[15%] bg-primary'>
                        <Link className='flex-auto rounded-lg items-center justify-center' to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav