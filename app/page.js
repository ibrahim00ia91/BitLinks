import Image from "next/image";
import localFont from "next/font/local";
import css from './css/style.css';
import Link from "next/link";
const poppins = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const poppins2 = localFont({
  src: "./fonts/Montserrat-Light.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
   <main>
    <section className="grid grid-cols-2 h-[50vh] main">
      <div className="head flex flex-col justify-center items-center bg-purple-100">
       <p className={` cursor-default font-bold text-3xl ${poppins.className}`}>The best URL shortener in the Market</p>
       <p className={`px-16 py-4 cursor-default text-center ${poppins2}`}>We are the most straightforward URL in the world if you use this website for shorten your link you can use it without any login or signup and without and add it is the most easiest link shortener in the world.</p>
       <div className='gap-3 flex mt-3 text-white'>
                <Link href='/shorten'><button className='bg-purple-600 hover:bg-purple-900 p-3  rounded-md shadow-xl py-1 font-bold'>Try Now</button></Link>
                <Link target="_blank" href='https://github.com/ibrahim00ia91'><button className='bg-purple-600 hover:bg-purple-900 rounded-md shadow-xl  p-3 py-1 font-bold'>Github</button></Link>
            </div>
      </div>
      <div className="bg-purple-100 relative image">
      <Image className=" mix-blend-darken" alt="Image of vector" src="/vector.jpg" fill={true}/>
      </div>
    </section>
   </main>
  );
}
