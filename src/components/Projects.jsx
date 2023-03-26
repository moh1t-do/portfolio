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

    const { image, title, link, gitLink } = props
    return (
        <motion.div
            id="projects"
            ref={ref}
            variants={boxVariant}
            animate={control}
            className="flex h-80 flex-col justify-center pt-1 drop-shadow sm:h-[26rem] md:h-[30rem] lg:h-72"
        >
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="group relative flex-auto bg-cover bg-center bg-no-repeat text-4xl text-white"
            >
                <div className="h-full w-full bg-black opacity-10 transition-all ease-in group-hover:opacity-80"></div>
                <div className="absolute top-1/2 flex w-full justify-center font-bold opacity-0 hover:text-primary group-hover:opacity-100">
                    <a href={link} target="_blank">
                        {title}
                    </a>
                </div>
            </div>
            <div className="py-1 text-sm sm:flex sm:justify-between">
                <a
                    href={gitLink}
                    target="_blank"
                    className="cursor-pointer hover:text-primary"
                >
                    GITHUB LINK
                </a>
            </div>
        </motion.div>
    )
}

function Projects() {
    return (
        <div id="projects" className="mb-[30rem] bg-white pt-16 pb-12">
            <h1 className="text-center text-4xl uppercase text-primary">
                Projects
            </h1>
            <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 px-5 pt-20 md:px-20 lg:grid-cols-3">
                {projectsData.map(({ key, image, title, link, gitLink }) => (
                    <Tile
                        key={key}
                        image={image}
                        title={title}
                        link={link}
                        gitLink={gitLink}
                    />
                ))}
            </div>
            <div id="contact"></div>
        </div>
    )
}

export default Projects
