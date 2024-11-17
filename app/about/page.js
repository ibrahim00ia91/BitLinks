import React from 'react'

const page = () => {
  return (
    <>
    <div className='h-screen w-screen'>

     <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-center mb-6">
          Welcome to <strong>BitLinks</strong>, your go-to platform for creating quick, reliable, and user-friendly short links.
          Whether you are managing a marketing campaign, sharing memorable URLs, or simply decluttering long links, we will got you covered!
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At <strong>BitLink</strong>, we aim to simplify how you share links, provide a seamless and efficient experience, and
            enable better tracking and analytics for your links. We believe in making the web accessible and convenient, one short link at a time.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ease of Use: Shortening your links is as simple as a single click.</li>
            <li>Speed: Our platform is optimized for instant results.</li>
            <li>Reliability: Shortened links that work every time, on any device.</li>
            <li>Analytics: Gain insights into who clicks your links with real-time data tracking.</li>
            <li>Security: We prioritize keeping your data safe and secure.</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Enter your long URL in our input box.</li>
            <li>Click the <strong>“Generate”</strong> button.</li>
            <li>Receive your new, compact link to share anywhere.</li>
          </ol>
        </div>

       
      </div>
    </div>
      
    </div>

    
    </>
  )
}

export default page
