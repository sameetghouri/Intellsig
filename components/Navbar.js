"use client";
import Link  from 'next/link';
import Image from 'next/image';
import {HiMenuAlt2} from 'react-icons/hi'
import { useState } from 'react';
const Nav = () => {
    const [opennav, setopennav] = useState(false)
    const openfun = ()=>{ setopennav(!opennav)}

    return (
    <nav className='w-full fixed bg-gr opacity-90 p-3 flex  border-b border-gr2 '>
        <div className='ml-2 mr-4'>
        <Link href="/" >
        <Image  src="/home-1.png" alt='home' width={115} height={50} />
        </Link>
        </div>
        
        <div className='hidden ml-4 mr-2  overflow-hidden lg:flex lg:gap-5 lg:items-end '>     
        <Link href="/" className= "hover:text-sk border-b border-gr hover:border-sk transition duration-300 text-white font-semibold">Home</Link>
        <Link href="/" className="hover:text-sk border-b border-gr hover:border-sk transition duration-300 text-white font-semibold">About Us</Link>
        <Link href="/" className="hover:text-sk border-b border-gr hover:border-sk transition duration-300 text-white font-semibold">Sevices</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300  text-white font-semibold">How It Works</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300  text-white font-semibold">Blog</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300  text-white font-semibold">FAQ</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300 text-white font-semibold">Privacy Policy</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300  text-white font-semibold">Special Offers</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300  text-white font-semibold">Contact Us</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300  text-white font-semibold">Performance</Link>
        <Link href="/" className= " hover:text-sk border-b border-gr hover:border-sk transition duration-300  text-white font-semibold">Login/Signup</Link>

        </div>
        
        <div className=' ml-auto flex'>
        <button className='px-2 mr-4 bg-sk text-white font-semibold text-sm rounded hover:bg-sk2
         transition duration-200'>INSIG TOKEN</button>

        <HiMenuAlt2 className="lg:hidden w-10 h-10 text-gray-200 hover:text-sk cursor-pointer" onClick={openfun} />
        </div>
    </nav>);
}
export default Nav;