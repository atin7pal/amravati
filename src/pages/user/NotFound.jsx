import React from 'react'
import { Link } from 'react-router-dom'

export function NotFound(props) {
    

    return (
        <>
            <section className="section min-h-screen w-full flex justify-center items-center themebg">
                <div className="max-w-4xl p-20 bg-white flex flex-col gap-4 justify-center items-center">
                    <h2 className='text-6xl'>Sorry</h2>
                    <h2 className="text-3xl accentfont">The Page You're Looking For Wasn't Found</h2>
                    <p  className=''>You Might Checkout</p>
                    <div className='w-full flex justify-center items-center gap-4 mt-6'>
                    <Link to="/" className='btn accentfont w-full'>Home</Link>
                    <Link to="/contact" className='btn accentfont w-full'>Contact Us</Link>
                    </div>
                  
                </div>
            </section>
        </>
    )
}
