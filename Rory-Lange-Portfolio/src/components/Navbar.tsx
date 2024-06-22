import React from 'react'

const Nav = () => {
    const path = window.location.pathname;
    


    return (
        <nav>
            <div>
                <ul className='flex'>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Projects">Projects</a>
                    </li>
                    <li>
                        <a href="/About">Personal</a>
                    </li>
                    <li>
                        <a href="/About">Experience</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav