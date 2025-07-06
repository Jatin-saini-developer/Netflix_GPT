import React from 'react'
import { FaPlay, FaInfoCircle } from 'react-icons/fa'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='mt-24 px-8 py-16 text-black max-w-4xl absolute'>
        <h1 className='text-4xl font-bold mb-4'>{title}</h1>
        <p className='text-lg leading-relaxed mb-6'>{overview}</p>
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
