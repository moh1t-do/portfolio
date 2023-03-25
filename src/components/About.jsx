function About() {
    return (
        <div id="about" className="relative w-screen">
            <div className="h-20 w-full bg-black">
                <div className="absolute h-60 w-full bg-white lg:flex lg:w-[85vw] lg:flex-row-reverse lg:py-10 lg:px-10">
                    <img alt="my image"></img>
                    <div>
                        <h1 className="text-2xl uppercase">About ME</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Beatae, porro exercitationem consequatur
                            officia possimus repudiandae magnam animi velit ut
                            modi nulla autem quae ex laudantium amet. Excepturi
                            reprehenderit repellat omnis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
