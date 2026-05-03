import React, { useState, useEffect } from 'react'
import Seearch from './Search'
import { useNavigate } from 'react-router-dom'
// import React from 'react'

function Home() {
  const [data, setdata] = useState(null)
  const navigate = useNavigate()
    const [choose,setchose] = useState({
    name : null,
    lat : null,
    long : null,
    capacity : null,
    parkingFee : null,
    parkingType : null,
    Formatted : null,
  })
  // fetches data fromapi 
  useEffect(() => {
    fetch("https://api.geoapify.com/v2/places?categories=parking&filter=circle:77.1025,28.7041,5000&apiKey=bc475bb3622d4f59bbf0253052ca93a7")
    .then((res) => res.json())
    .then((inf) => setdata(inf))
    
    console.log("fetched")
  }, [])
  
  // 🛑 prevent crash loading 
  if (!data) return <p>Loading...</p> 
  const loopData = [...data.features, ...data.features];

  return (
    <div className='px-4 py-6 lg:px-8'> 
      {/* nearby parking here animation */}
      <h2 className='text-center text-2xl font-semibold mb-4'>Nearby Parking</h2>
      <div className='w-full max-w-6xl mx-auto overflow-x-auto overflow-y-visible mt-4 py-2'>
        <div className='flex gap-4 animate-scroll items-center'>
          {loopData.slice(7,19).map((place, i) => (
            <div key={i} className='min-w-[240px] shrink-0 rounded-3xl bg-white p-4 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl'>
              <button
                type='button'
                onClick={() => {
                  const selected = {
                    name: place.properties.name,
                    lat: place.geometry.coordinates[1],
                    long: place.geometry.coordinates[0],
                    capacity: place.properties.datasource?.raw?.capacity || 10,
                    parkingFee: place.properties.parking?.fee === false ? 'Free' : 67,
                    parkingType: place.properties.parking?.type || 'general',
                    formatted: place.properties.formatted,
                  }

                  setchose(selected)

                  navigate('/ParkingChoose', {
                    state: { selected },
                  })
                }}
                className='text-left w-full'
              >
                <h3 className='text-lg font-semibold mb-2'>📍 {place.properties.name || 'Parking'}</h3>
                <p className='text-sm text-slate-600'>{place.properties.formatted}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      <hr className='my-8 border-slate-200' />
      <Seearch data={data.features} />
    </div>
  )
}

export default Home