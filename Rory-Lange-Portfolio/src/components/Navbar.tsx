import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <nav className=''>
            <div className='sticky top-0 inset-y-0 h-fit w-screen bg-card'>
                <ul className='flex gap-4 justify-center'>
                    <li className='px-4 py-2'>
                        <Link className='rounded-lg w-[15%] bg-primary' to="/About">About</Link>
                    </li>
                    <li className='rounded-lg px-4 py-2 w-[15%] bg-primary'>
                        <Link className='rounded-lg w-[15%] bg-primary' to="/Projects">Projects</Link>
                    </li>
                    <li className='rounded-lg px-4 py-2 w-[15%] bg-primary'>
                        <Link className='rounded-lg w-[15%] bg-primary' to="/About">Personal</Link>
                    </li>
                    <li className='rounded-lg px-4 py-2 w-[15%] bg-primary'>
                        <Link className='rounded-lg w-[15%] bg-primary' to="/About">Experience</Link>
                    </li>
                    <li className='rounded-lg px-4 py-2 w-[15%] bg-primary'>
                        <Link className='rounded-lg w-[15%] bg-primary' to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav