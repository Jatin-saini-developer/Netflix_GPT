import React from 'react'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='mt-40 h-[100vh] px-8 py-16 text-white max-w-4xl absolute bg-gradient-to-r from-black via-transparent to-transparent'>
        <h1 className='text-5xl font-extrabold mb-4 drop-shadow-lg'>{title}</h1>
        <p className='text-xl w-3/4 leading-relaxed mb-6 text-gray-200 drop-shadow-md'>{overview}</p>
        <div className='flex gap-4'>
            <button className='flex items-center gap-2 bg-white text-black px-6 py-2 text-lg font-semibold rounded hover:bg-gray-200 transition'>
                <FaPlay /> Play
            </button>
            <button className='flex items-center gap-2 bg-gray-500 bg-opacity-70 text-white px-6 py-2 text-lg font-semibold rounded hover:bg-opacity-90 transition'>
                <FaInfoCircle /> More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
