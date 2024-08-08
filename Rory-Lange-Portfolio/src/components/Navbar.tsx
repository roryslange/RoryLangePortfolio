import { Link } from 'react-router-dom'

const Nav = () => {

    const LinkStyles = 'flex flex-auto rounded-lg items-center justify-center';
    const LiStyles = 'flex rounded-sm p-2 hover:shadow-xl hover:bg-primary hover:-translate-y-0.5 duration-300';


    return (
        <nav className='sticky top-0 z-50'>
            <div className='py-5 w-screen bg-card shadow-xl items-center'>
                <ul className='flex gap-4 justify-center'>
                    <li className={LiStyles}>
                        <Link className={LinkStyles} to="/About">home</Link>
                    </li>
                    <li className={LiStyles}>
                        <Link className={LinkStyles} to="/Timeline">timeline</Link>
                    </li>
                    <li className={LiStyles}>
                        <Link className={LinkStyles} to="/Projects">projects</Link>
                    </li>
                    <li className={LiStyles}>
                        <p className={LinkStyles}>socials</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav