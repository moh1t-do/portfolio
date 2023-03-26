import { useState, useCallback } from 'react'
import Input from './Input'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>
            <div className="fixed bottom-0 -z-10 flex h-96 w-screen justify-center bg-black">
                <div className="mt-2  px-16 py-24 lg:w-4/5 lg:max-w-lg">
                    <h1 className="mb-8 text-4xl text-primary">Contact Me</h1>
                    <div className="flex flex-col gap-4">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
