import { AiOutlineAlignRight } from 'react-icons/ai'

function Link(props) {
    const { children, lkn } = props
    return (
        <li>
            <a className="hover:text-primary" href={lkn}>
                {children}
            </a>
        </li>
    )
}

function Navbar() {
    const handleClick = ({ target }) => {
        console.log('I got clicked')
    }
    return (
        <nav
            className={`sticky top-0 flex h-12 w-screen items-center justify-between bg-black px-5 py-8 uppercase text-white shadow-md transition-all md:px-20`}
        >
            <h1>Mohit.</h1>
            <ul className="hidden gap-10 md:flex">
                <Link lkn="#!">Home</Link>
                <Link lkn="#!">About</Link>
                <Link lkn="#!">Skill</Link>
                <Link lkn="#!">Projects</Link>
            </ul>
            <button className="hidden uppercase md:flex">Contact me</button>
            <button
                className="uppercase hover:text-primary md:hidden"
                onClick={handleClick}
            >
                <AiOutlineAlignRight size="30px" />
            </button>
        </nav>
    )
}

export default Navbar
