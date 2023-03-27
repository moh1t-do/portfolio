import {
    SiSvelte,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiFirebase,
    SiAdobeillustrator,
} from 'react-icons/si'
function Skills() {
    return (
        <div>
            <h1 className="mb-10 text-4xl uppercase text-primary">My Skills</h1>
            <div className="grid w-full grid-cols-3 grid-rows-2 items-center justify-items-center md:flex md:justify-between">
                <SiReact
                    className="my-3 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                    size={50}
                />
                <SiSvelte
                    className="my-3 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                    size={50}
                />
                <SiTailwindcss
                    className="my-3 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                    size={50}
                />
                <SiJavascript
                    className="my-3 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                    size={50}
                />
                <SiFirebase
                    className="my-3 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                    size={50}
                />
                <SiAdobeillustrator
                    className="my-3 transition-all hover:-translate-y-1 hover:scale-[1.1]"
                    size={50}
                />
            </div>
        </div>
    )
}

export default Skills
