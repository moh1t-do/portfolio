import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import projectsData from './projectsData'

function Tile(props) {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const boxVariant = {
        visible: { x: 0, y: 0, transition: { duration: 0.8 } },
        hidden: { x: 0, y: 100 },
    }

    useEffect(() => {
        if (inView) {
            control.start('visible')
        } else {
            control.start('hidden')
        }
    }, [control, inView])

    const { image, title, subtitle, top, link } = props
    return (
        <motion.div
            id="projects"
            ref={ref}
            variants={boxVariant}
            animate={control}
            className={`flex flex-col justify-center pt-1 ${
                top ? 'h-96' : 'h-80 sm:h-[26rem] md:h-[30rem] lg:h-72'
            }`}
        >
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="bg relative flex-auto bg-cover bg-center bg-no-repeat text-4xl text-white"
            >
                <div className="h-full w-full bg-black opacity-10 transition-all ease-in hover:opacity-5"></div>
                {top && (
                    <div className="absolute top-1/2 flex w-full justify-center font-bold">
                        {title}
                    </div>
                )}
            </div>
            <div className="py-1 text-sm sm:flex sm:justify-between">
                <a href={link} target="_blank" className="hover:text-primary">
                    LINK
                </a>
            </div>
        </motion.div>
    )
}

function Projects() {
    return (
        <div>
            <h1 className="my-4 text-center text-4xl uppercase text-primary">
                Projects
            </h1>
            <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 py-10 px-5 md:px-20 lg:grid-cols-3">
                {projectsData.map(({ key, image, title, subtitle, link }) => (
                    <Tile
                        key={key}
                        image={image}
                        title={title}
                        subtitle={subtitle}
                        link={link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects