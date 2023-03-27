import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
    AiFillLinkedin,
    AiOutlineGithub,
    AiFillInstagram,
} from 'react-icons/ai'

function HeroIcons(props) {
    const { children, lnk } = props
    return (
        <li className="relative hover:text-primary">
            <a href={lnk} target="_blank">
                {children}
            </a>
        </li>
    )
}

function Hero() {
    const [cursorX, setCursorX] = useState(0)
    const [cursorY, setCursorY] = useState(0)
    const [cursorHero, setCursorHero] = useState(true)
    const [cursorVariant, setCursorVariant] = useState('default')

    const mouseMove = (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: cursorX - 10,
            y: cursorY - 10,
        },
        text: {
            x: cursorX - 50,
            y: cursorY - 50,
            height: 100,
            width: 100,
            mixBlendMode: 'difference',
        },
    }

    const textEnter = () => setCursorVariant('text')
    const textLeave = () => setCursorVariant('default')

    return (
        <div
            id="hero"
            className="flex h-screen w-screen  flex-col items-center justify-start overflow-hidden bg-black px-2 py-4 pb-20 md:cursor-none md:px-20 lg:flex-row lg:justify-between"
            onMouseEnter={() => setCursorHero(true)}
            onMouseLeave={() => setCursorHero(false)}
        >
            <div className="my-auto flex-col items-center">
                <h1
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className=" text-center text-4xl text-primary lg:text-left lg:text-8xl"
                >
                    Hello, I'am
                </h1>
                <motion.h1
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4 }}
                    className="-mx-1 mt-4 text-center text-8xl uppercase text-white lg:-mx-4 lg:text-left lg:text-14xl"
                >
                    Mohit.
                </motion.h1>
            </div>
            <div
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className=" mb-auto text-white lg:my-auto"
            >
                <ul className="flex items-center gap-10 lg:flex-col">
                    <HeroIcons lnk="https://www.linkedin.com/in/mohitd137/">
                        <AiFillLinkedin className="text-[30px] lg:text-[40px]" />
                    </HeroIcons>
                    <HeroIcons lnk="https://github.com/moh1t-do">
                        <AiOutlineGithub className="text-[30px] lg:text-[40px]" />
                    </HeroIcons>
                    <HeroIcons lnk="https://www.instagram.com/moh1t.do/">
                        <AiFillInstagram className="text-[30px] lg:text-[40px]" />
                    </HeroIcons>
                </ul>
                <div className="relative mt-10">
                    <a href="#about">
                        <div className="arrow"></div>
                    </a>
                </div>
            </div>

            {cursorHero && (
                <motion.div
                    className="pointer-events-none fixed top-0 left-0 h-5 w-5 cursor-none rounded-full bg-white opacity-0 md:opacity-100"
                    variants={variants}
                    animate={cursorVariant}
                    transition={{ duration: 0.1 }}
                ></motion.div>
            )}
        </div>
    )
}

export default Hero
