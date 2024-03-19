import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='h-[calc(100vh-70px)]'>
        <div className='relative flex flex-col md:flex-row justify-center items-center h-full'>
            <h1 className='text-[150px] md:text-[250px] text-slate-300 shadow-md md:leading-4 hover:text-slate-500'>AIR MAX</h1>
            <Link to="/explore" className='bg-black text-white rounded-md px-2 py-1'>Explore now</Link>
            <img src="./banner.png" className='absolute w-[500px] h-[400px] md:w-[600px] md:h-[600px] hover:translate-y-4 duration-1000 ease-in-out'/>
        </div>
    </div>
  )
}
