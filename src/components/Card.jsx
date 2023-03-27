import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import About from './About'
import Skills from './Skills'

function Card() {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { x: 0, y: -100, transition: { duration: 0.8 } },
        hidden: { x: -100, y: -100 },
        mobile: { x: 0, y: 100 },
    }

    useEffect(() => {
        let wd = document.getElementById('card').clientWidth
        console.log(wd)
        if (inView) {
            control.start('visible')
        } else {
            if (wd >= 1024) control.start('hidden')
            else control.start('mobile')
        }
    }, [control, inView])

    return (
        <>
            <div id="card" className="w-screen bg-white transition-all ease-in">
                <div className="h-20 w-full bg-black"></div>
                <motion.div
                    ref={ref}
                    variants={boxVariant}
                    animate={control}
                    className="relative w-screen bg-white px-5 pt-10 md:px-20 lg:flex lg:w-[85vw] lg:flex-row lg:items-center lg:py-20 lg:drop-shadow-lg"
                >
                    <img
                        src="./images/mohit.jpg"
                        width="100%"
                        className="mx-auto my-4 max-w-sm"
                    ></img>
                    <div className="lg:ml-8">
                        <About />
                        <Skills />
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Card
