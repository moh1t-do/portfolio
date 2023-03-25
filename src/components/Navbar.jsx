import { useState } from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai'

function Link(props) {
    const { children, lkn } = props
    return (
        <li className="my-10 md:my-0">
            <a className=" hover:text-primary" href={lkn}>
                {children}
            </a>
        </li>
    )
}

function Navbar() {
    const [isOpen, toggleNav] = useState('false')
    const handleClick = ({ target }) => {
        toggleNav(!isOpen)
    }

    return (
        <nav
            className={`sticky top-0 z-50 flex h-12 w-screen items-center justify-between bg-black px-5 py-8 uppercase text-white shadow-md  md:px-20`}
        >
            <h1>Mohit.</h1>
            <ul
                id="ham"
                className={` absolute top-20 left-1/2 w-full -translate-y-4 -translate-x-1/2 gap-10 bg-black  py-8 px-10  text-center ease-in md:static md:flex md:w-auto md:translate-y-0 md:translate-x-0 md:py-0 md:px-0 ${
                    isOpen ? 'hidden ' : ''
                }`}
            >
                <Link lkn="#">Home</Link>
                <Link lkn="#about">About</Link>
                <Link lkn="#about">Skills</Link>
                <Link lkn="#projects">Projects</Link>
            </ul>
            <button className="hidden uppercase md:flex">Contact me</button>
            <button
                className="uppercase hover:text-primary md:hidden"
                onClick={handleClick}
            >
                <AiOutlineAlignRight size="30px" onClick={handleClick} />
            </button>
        </nav>
    )
}

export default Navbar
