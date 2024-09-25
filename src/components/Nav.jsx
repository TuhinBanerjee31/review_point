import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='font-Quicksand flex justify-around items-center px-3 py-3 border-2'>
      <div>
        <NavLink to={'/'} className='text-2xl font-bold'>Review Point</NavLink>
        <p className='tracking-wider'>know about your Industry</p>
        </div>

      <div className='flex gap-5 self-end'>
        <NavLink to={'/interview-tips'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Interview Tips</NavLink>
        <NavLink to={'/success-stories'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Success Stories</NavLink>
        <NavLink to={'/reviews'} className='cursor-pointer font-medium hover:text-blue-400 transition-colors'>Reviews</NavLink>
      </div>
    </div>
  )
}

export default Nav
