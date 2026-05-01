import React from 'react'
import { Link } from 'react-router-dom'
import ParkNowLogo from '../Assests/ParkingLogo'

function Navbar() {
  return (
    <>
    {/* // central nav bar div applies flex on logo and links */}
    <div className='flex justify-around border-b border-[#E5E7EB] bg-[#F8FAFC]'> 
      {/* rendering the logo component it is an svg guys  */}
      <div><ParkNowLogo /></div>
      {/* links here flex appliedn in home about and others  */}
      <div className='flex justify-evenly gap-5 items-center'>
        {/* will include search and apply implement here aysuhmaan */}
        <div className=' border-[#1B365D] text-[#1B365D] text-center p-4 rounded-[20%] w-[140px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
          <Link to="/home">Home</Link>
        </div>
        {/* previous will be fetched from client here currenly in an dummy objet */}
        <div className=' border-[#1B365D] text-[#1B365D] text-center p-4 rounded-[20%] w-[140px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
          <Link to="/previoustrips">Previous trips</Link>
        </div>
        <div className=' border-[#1B365D] text-[#1B365D] text-center p-4 rounded-[20%] w-[140px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
          <Link to="/about">About</Link>
        </div>

        <div className=' border-[#1B365D] text-[#1B365D] text-center p-4 rounded-[20%] w-[140px] bg-white shadow-[6px_6px_12px_rgba(0,0,0,0.15)] hover:ring-[#1B365D] hover:ring-4 hover:scale-105 transition duration-150 ease-in-out'>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </div>
    </>
  )
}

export default Navbar