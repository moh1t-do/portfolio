function About() {
    return (
        <>
            <div
                id="about"
                className="w-screen rounded-xl transition-all ease-in"
            >
                <div className="h-20 w-full bg-black"></div>
                <div className="relative w-screen -translate-y-20 bg-white px-5 pt-10 lg:flex lg:w-[85vw] lg:flex-row lg:items-center lg:py-20 lg:px-20 lg:drop-shadow-lg">
                    <img
                        src="./images/mohit.jpg"
                        width="100%"
                        className="mx-auto my-4 max-w-sm"
                    ></img>
                    <div className="lg:ml-8">
                        <div>
                            <h1 className="mb-10 text-4xl uppercase">
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
                            <h1 className="mb-10 text-4xl uppercase">
                                My Skills
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
