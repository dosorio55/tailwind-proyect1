import React from 'react';
import ilustration from '../assets/illustration-intro.svg'

const Hero = () => {
    return (
        <section className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10'>
            {/* flex container */}
                {/* section 1 */}
                <div className='flex flex-col space-y-12 md:w-1/2'>
                    <h1 className='text-4xl font-bold text-center mx-auto md:text-5xl md:text-left'>
                        Bring everyone together to build better products
                    </h1>
                    <p className='text-center text-darkGrayishBlue md:text-left'>
                        Manage makes it simple for software teams to plan day-to-day tasks
                        while keeping the larger team goals in view.
                    </p>
                    <div className='container flex justify-center md:justify-start'>
                        <button className='hidden md:block py-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight'>Get Started</button>
                    </div>
                </div>
                {/* section 2 */}
                <div>
                    <img src={ilustration} alt="chart" />
                </div>
        </section>
    )
}

export default Hero