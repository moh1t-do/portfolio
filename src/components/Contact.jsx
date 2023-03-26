import { useState, useCallback } from 'react'
import Input from './Input'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>
            <div className="fixed bottom-0 -z-10 flex h-100 w-screen items-center justify-center bg-black py-12">
                <div className="mt-2 py-24 lg:w-4/5 lg:max-w-lg">
                    <h1 className="mb-8 text-center text-4xl text-primary">
                        Contact Me
                    </h1>
                    <div className="flex flex-col gap-6">
                        <Input
                            label="Name"
                            onChange={(event) => setName(event.target.value)}
                            id="name"
                            type="name"
                            value={name}
                        />
                        <Input
                            label="Email"
                            onChange={(event) => setEmail(event.target.value)}
                            id="email"
                            type="email"
                            value={email}
                        />
                        <button className="mt-4 w-1/2 rounded-md bg-primary py-3 text-xl uppercase text-white opacity-95 transition-opacity ease-in hover:opacity-100">
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
