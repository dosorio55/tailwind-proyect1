import React from 'react';
import logo from '../assets/logo.svg';

const NavBar = () => {
    return (
        <nav className='relative container mx-auto p-6'>
            {/* flex container */}
            <div className='flex items-center justify-between'>
                <div className="pt-2">
                    <img src={logo} alt="" />
                </div>
                {/* menu Items */}
                <div className='hidden md:flex space-x-6'>
                    <a href="https://github.com/dosorio55" className="hover:text-darkGrayishBlue font-semibold">Pricing</a>
                    <a href="https://github.com/dosorio55" className="hover:text-darkGrayishBlue font-semibold">Product</a>
                    <a href="https://github.com/dosorio55" className="hover:text-darkGrayishBlue font-semibold">About Us</a>
                    <a href="https://github.com/dosorio55" className="hover:text-darkGrayishBlue font-semibold">Careers</a>
                    <a href="https://github.com/dosorio55" className="hover:text-darkGrayishBlue font-semibold">Community</a>
                </div>
                {/* button */}
                <button className='hidden md:block py-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight'>Get more</button>
            </div>
        </nav>
    )
}

export default NavBar