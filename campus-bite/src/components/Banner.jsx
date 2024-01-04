import React from 'react'

const Banner = () => {
  return (
    <div className="section-container text-secondary">
      <div className="flex flex-col md:flex-row items-center justify-between py-20 md:py-10 lg:px-16 relative">
        <div className=''>
          <h2 className='sm:text-6xl text-4xl'>Welcome to</h2>
          <h1 className='sm:text-7xl text-5xl font-bold py-5'>Campus Bite</h1>
          <p className='sm:text-2xl text-xl'>A culinary paradise at the heart of campus life.</p>
        </div>
        <div className=''>
          <img src="images/banner.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner