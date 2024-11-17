import Link from 'next/link'
import React from 'react'
import localFont from "next/font/local";
import Image from 'next/image';
import css from '../app/css/style.css'

const poppins = localFont({
    src: "../app/fonts/Montserrat-Medium.ttf",
    variable: "--font-poppins",
    weight: "100 900",
  });



const Navbar = () => {
  return (
    <>
    <nav className={`bg-purple-800 h-14 flex justify-between items-center px-3 text-white ${poppins.className} `}>
        <ul className='font-bold'>
        <Link href='/'><li className='mt-1 hover:text-black bitlink'>BitLinks</li></Link>
        </ul>
        <ul className='ul flex gap-5'>
           <Link href='/'><li className='mt-1 hover:text-black'>Home</li></Link>
            <Link href='/about'><li className='mt-1 hover:text-black'>About</li></Link>
            <Link href='/shorten'><li className='mt-1 hover:text-black'>Shorten</li></Link>
            <Link href='/contact'><li className='mt-1 hover:text-black'>Contact</li></Link>
            <li className='gap-3 flex'>
                <Link href='/shorten'><button className='bg-purple-600 hover:bg-purple-400 rounded-md shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link target='_blank' href='https://github.com/ibrahim00ia91'><button className='bg-purple-800 hover:bg-purple-100 rounded-md px-3 shadow-lg  font-bold'><Image alt="github image" width={34} height={5} src='/github.png'/></button></Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
