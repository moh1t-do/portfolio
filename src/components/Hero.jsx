import {
    AiFillLinkedin,
    AiOutlineGithub,
    AiFillInstagram,
} from 'react-icons/ai'
function HeroIcons(props) {
    const { children, lnk } = props
    return (
        <li className="hover:text-primary">
            <a href={lnk}>{children}</a>
        </li>
    )
}

function Hero() {
    return (
        <div className="flex h-96 flex-col items-center justify-start bg-black px-2 py-4 md:px-20 lg:h-screen lg:flex-row lg:justify-between">
            <div className="my-auto flex-col items-center">
                <h1 className=" text-center text-4xl text-primary lg:text-left lg:text-8xl">
                    Hello, I'am
                </h1>
                <h1 className="-mx-1 text-center text-8xl uppercase text-white lg:-mx-4 lg:text-left lg:text-14xl">
                    Mohit.
                </h1>
            </div>
            <div className="text-white">
                <ul className="my-4 flex items-center gap-10 lg:flex-col">
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
            </div>
        </div>
    )
}

export default Hero
