import React from 'react'

const Contact = () => {
    return (
        <div className="fixed bottom-0 -z-10 flex h-100 w-screen items-center justify-center bg-black py-12">
            <div className="mt-2  py-24 lg:w-4/5 lg:max-w-lg">
                <h1 className="mb-8 text-center text-4xl uppercase text-primary">
                    Contact Me
                </h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className=" rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className=" rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
                    />
                    <textarea
                        className=" rounded-md border-2 bg-transparent p-2 text-white focus:outline-none"
                        rows="5"
                        placeholder="Message"
                    ></textarea>
                    <button className="mx-auto mt-6 w-full rounded-md bg-primary bg-gradient-to-b from-primary to-pink-600 py-3 px-6 text-lg uppercase text-white duration-300 hover:scale-105 md:w-1/2">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
