"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import localFont from "next/font/local";



const poppins2 = localFont({
  src: "../fonts/Montserrat-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const Page = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    function generate(){
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result),
   alert("URL generated"),
   seturl(""),
   setshorturl(""),
   setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
  )
  .catch((error) => console.error(error));
    }

  return (


    <div className="mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-xl gap-3">
    <div className={`font-bold text-2xl cursor-default ${poppins2.className}`}>Generate your short URL</div>
      <div className="flex flex-col gap-4 my-3">
        <input onChange={function(e){seturl(e.target.value)}} value={url} className={`focus:outline-purple-600 rounded-lg px-5 py-2 ${poppins2.className}`} type='text' placeholder='Enter your URL'/>
        <input onChange={function(e){setshorturl(e.target.value)}}value={shorturl} className={`focus:outline-purple-600 ${poppins2.className} p-6 rounded-lg`} type='text' placeholder='Enter your short preferred URL text'/>
        <button onClick={generate} className='bg-purple-600 hover:bg-purple-400 rounded-md shadow-lg my-3  p-3 py-1 font-bold text-white'>Generate</button>
      </div>
      {generated && <div className={`flex flex-col ${poppins2.className}`}><span className="text-xl font-bold">Your Link is </span> <code><Link target="_blank" href={generated}>{generated}</Link>
        </code></div>}
        
          </div>
            
  )
}

export default Page