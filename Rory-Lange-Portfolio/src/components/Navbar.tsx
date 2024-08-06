import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <nav className='sticky top-0 z-50'>
            <div className='py-5 w-screen bg-card shadow-xl items-center'>
                <ul className='flex gap-4 justify-center'>
                    <li className='flex rounded-lg p-2 hover:shadow-xl hover:bg-primary duration-300'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/About">home</Link>
                    </li>
                    <li className='flex rounded-lg p-2 hover:shadow-xl hover:bg-primary duration-300'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/Timeline">timeline</Link>
                    </li>
                    <li className='flex rounded-lg p-2 hover:shadow-xl hover:bg-primary duration-300'>
                        <Link className='flex flex-auto rounded-lg items-center justify-center' to="/Projects">projects</Link>
                    </li>
                    <li className='flex rounded-lg p-2 hover:shadow-xl hover:bg-primary duration-300'>
                        <p className='flex flex-auto rounded-lg items-center justify-center'>socials</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav