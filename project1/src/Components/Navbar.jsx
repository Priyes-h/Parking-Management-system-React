import React from 'react'
import { Link } from 'react-router-dom'
import ParkNowLogo from '../../public/Assests/ParkingLogo'

function Navbar() {
  return (
    <>
      {/* central nav bar div applies flex on logo and links */}
      <div className='flex flex-col gap-4 border-b border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4 md:flex-row md:items-center md:justify-between'> 
        <div className='flex items-center justify-between gap-4'>
          <ParkNowLogo />
        </div>

        {/* links here flex applied in home about and others */}
        <div className='flex flex-wrap justify-center gap-3 md:justify-end'>
          <div className='border-[#1B365D] text-[#1B365D] text-center px-4 py-3 rounded-full min-w-[120px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
            <Link to='/home'>Home</Link>
          </div>
          <div className='border-[#1B365D] text-[#1B365D] text-center px-4 py-3 rounded-full min-w-[120px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
            <Link to='/previoustrips'>Previous trips</Link>
          </div>
          <div className='border-[#1B365D] text-[#1B365D] text-center px-4 py-3 rounded-full min-w-[120px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
            <Link to='/about'>About</Link>
          </div>
          <div className='border-[#1B365D] text-[#1B365D] text-center px-4 py-3 rounded-full min-w-[120px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar