import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import {
    SiSvelte,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiFirebase,
    SiAdobeillustrator,
} from 'react-icons/si'

function About() {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { x: 0, y: -100, transition: { duration: 0.8 } },
        hidden: { x: -100, y: -100 },
    }

    useEffect(() => {
        if (inView) {
            control.start('visible')
        } else {
            control.start('hidden')
        }
    }, [control, inView])

    return (
        <>
            <div
                id="about"
                className="w-screen  bg-white transition-all ease-in"
            >
                <div className="h-20 w-full bg-black"></div>
                <motion.div
                    ref={ref}
                    variants={boxVariant}
                    animate={control}
                    className="relative w-screen bg-white px-5 pt-10 lg:flex lg:w-[85vw] lg:flex-row lg:items-center lg:py-20 lg:px-20 lg:drop-shadow-lg"
                >
                    <img
                        src="./images/mohit.jpg"
                        width="100%"
                        className="mx-auto my-4 max-w-sm"
                    ></img>
                    <div className="lg:ml-8">
                        <div>
                            <h1 className="mb-10 text-4xl uppercase text-primary">
                                About ME
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                I am a second year undergrad student pursuing
                                Electronics and Communication Engineering at
                                National Institute of Technology, Raipur. I
                                belong to Jamshedpur Jharkhand. My hobbies are
                                watching movies, cubing and drawing digital
                                illustration.
                            </p>
                        </div>
                        <div>
                            <h1 className="mb-10 text-4xl uppercase text-primary">
                                My Skills
                            </h1>
                            <div className="grid w-full grid-cols-3 grid-rows-2 items-center justify-items-center md:flex md:justify-between">
                                <SiReact
                                    className="my-2 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                                    size={60}
                                />
                                <SiSvelte
                                    className="my-2 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                                    size={60}
                                />
                                <SiTailwindcss
                                    className="my-2 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                                    size={60}
                                />
                                <SiJavascript
                                    className="my-2 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                                    size={60}
                                />
                                <SiFirebase
                                    className="my-2 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                                    size={60}
                                />
                                <SiAdobeillustrator
                                    className="my-2 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                                    size={60}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default About
