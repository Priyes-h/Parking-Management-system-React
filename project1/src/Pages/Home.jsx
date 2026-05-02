import React, { useState, useEffect } from 'react'
import Seearch from './Search'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [data, setdata] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch("https://api.geoapify.com/v2/places?categories=parking&filter=circle:77.1025,28.7041,5000&apiKey=bc475bb3622d4f59bbf0253052ca93a7")
    .then((res) => res.json())
    .then((inf) => setdata(inf))
    
    console.log("fetched")
  }, [])
  
  // 🛑 prevent crash
  if (!data) return <p>Loading...</p>
  const loopData = [...data.features, ...data.features];

  return (
    <div>
      <h2 className='text-center text-2xl'>Nearby Parking</h2>
      <div className=' w-[90%]  overflow-x-scroll overflow-y-visible ml-[81px] mt-[35px] h-[150px]'>
        <div className=' flex gap-4 animate-scroll items-center'>

      {loopData.slice(7,19).map((place, i) => (
        <div className=' bg-white  pt-[35px] bg-red-600  hover:shadow-2xl rounded-xl hover:ring-2 hover:ring-inset hover:ring-fuchsia-300 shadow-[6px_6px_12px_rgba(0,0,0,0.15)]  p-6 transition flex shrink-0 h-[125px] ' > 
          <div onClick={()=> navigate("/ParkingChoose")} key={i} className=''>
          <h3> 📍{place.properties.name || "Parking"}</h3>
          <p> {place.properties.formatted}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
      <hr />
      <Seearch data = {data.features} />
    </div>
  )
}

export default Home