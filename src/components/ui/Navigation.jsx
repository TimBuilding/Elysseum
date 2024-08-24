import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="px-10 sm:px-24 flex flex-row pt-3.5 w-full items-center justify-between z-50">
            <a href='/'>
                <div className="flex flex-row justify-center items-center xl:scale-110">
                    <img src="/images/Logo.png" alt="Elysseum Logo" className="h-12 flex flex-row justify-center" />
                    <div className="pl-5 text-2xl font-extrabold">
                        <span className="h-10 flex flex-row items-center justify-center">Elysseum</span>
                    </div>
                </div>
            </a>
            <div className="hidden lg:flex text-sm xl:text-lg justify-end flex-row gap-x-8 content-center w-4/6">
                <a href="/" className="group relative">
                    <span>Home</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                </a>
                <a href="/aboutUs" className="group relative">
                    <span>About Us</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                </a>
                <a href="/service" className="group relative">
                    <span>Services</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                </a>
                <a href="/contact" className="group relative">
                    <span>Contact Us</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1/6 bg-[#664B93] group-hover:w-1/2 group-hover:transition-all duration-700 ease-in-out"></span>
                </a>
            </div>
            <div className="block lg:hidden">
                <Menu
                    onClick={() => setIsOpen(!isOpen)}
                    className={`ease-in-out transition duration-200 hover:text-[#664B93] ${isOpen ? "hidden" : "block"}`}
                >
                </Menu>
            </div>
            <div
                className={`px-12 py-6 bg-[#292929] right-0 top-0 absolute w-full flex flex-col lg:hidden ${isOpen ? "flex" : "hidden"}`}
            >
                <div className='w-full flex flex-row justify-end'>
                    <X
                        onClick={() => setIsOpen(!isOpen)}
                        className={`ease-in-out transition duration-200 hover:text-[#664B93] ${isOpen ? "flex" : "hidden"}`}
                    >
                    </X>
                </div>
                <div className="text-center font-medium my-10 text-lg sm:text-xl md:text-2xl space-y-8 md:space-y-10 flex flex-col">
                    <a href="/">
                        <span className='ease-in-out transition duration-200 hover:text-[#664B93]'>Home</span>
                    </a>
                    <a href="/aboutUs">
                        <span className='ease-in-out transition duration-200 hover:text-[#664B93]'>About Us</span>
                    </a>
                    <a href="/service">
                        <span className='ease-in-out transition duration-200 hover:text-[#664B93]'>Services</span>
                    </a>
                    <a href="/contact">
                        <span className='ease-in-out transition duration-200 hover:text-[#664B93]'>Contact Us</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
export default Navigation;