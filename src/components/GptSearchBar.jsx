import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='bg-slate-600  pt-40'>
        <form action="">
            <input type="search" placeholder='kya dekhega lavde aaj' />
            <button className='bg-violet-800 text-white px-4 py-2 rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar