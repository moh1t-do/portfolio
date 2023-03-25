import { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

function Link(props) {
    const { children, lkn } = props
    return (
        <li className="relative my-10 md:my-0">
            <a className=" nav-link hover:text-primary" href={lkn}>
                {children}
            </a>
        </li>
    )
}

function Navbar() {
    const [navActive, setActive] = useState('')
    const [carActive, setCar] = useState('')
    const handleClick = () => {
        let myHam = document.getElementById('ham')
        if (navActive === 'nav-mobile') {
            setActive(' ')
            setCar(' ')
        } else {
            setActive('nav-mobile')
            setCar('carret')
        }
    }

    return (
        <>
            <nav
                className={`sticky top-0 z-50 flex h-12 w-screen items-center justify-between bg-black px-5 py-8 uppercase text-white shadow-md  md:px-20`}
            >
                <h1 className="cursor-default">Mohit.</h1>
                <ul
                    id="ham"
                    className={` absolute top-20 left-1/2 w-full -translate-y-[100vh] -translate-x-1/2 gap-10 bg-black py-8  px-10 text-center transition-transform  ease-in md:static md:flex md:w-auto md:translate-y-0 md:translate-x-0 md:py-0 md:px-0  ${navActive}`}
                    onClick={handleClick}
                >
                    <Link lkn="#">Home</Link>
                    <Link lkn="#about">About</Link>
                    <Link lkn="#about">Skills</Link>
                    <Link lkn="#projects">Projects</Link>
                    <Link lkn="#projects">Contact Me</Link>
                </ul>
                <button
                    className="uppercase hover:text-primary md:hidden"
                    onClick={handleClick}
                >
                    <AiFillCaretDown
                        className={`transition-all ease-in ${carActive}`}
                        size="30px"
                        onClick={handleClick}
                    />
                </button>
            </nav>
        </>
    )
}

export default Navbar
