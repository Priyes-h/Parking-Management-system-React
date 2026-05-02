import React from 'react'
import { useState } from 'react'
import { Building2, Landmark, Building, Home, MapPin} from "lucide-react"

function Search() {
    const [search, setSearch] = useState("")

    const cities = [
    { name: "Mumbai", icon: <Building2 size={36} /> },
    { name: "Bangalore", icon: <Landmark size={36} /> },
    { name: "Delhi", icon: <Building size={36} /> },
    { name: "Pune", icon: <Home size={36} /> },
    { name: "Hyderabad", icon: <Landmark size={36} /> },
    { name: "Chennai", icon: <Home size={36} /> },
    { name: "Kolkata", icon: <Landmark size={36} /> },
    { name: "Chandigarh", icon: <MapPin size={36} /> }
  ]

  return (
    <div className="max-w-4xl mx-auto">
        <h1 className='text-3xl text-center font-bold mt-4'>
            Search Your Parking
        </h1>

        {/* Input section */}
        <input className='block mx-auto mt-4 border border-gray-700 rounded w-[500px] h-10 '
        type='text'
        value={search}
        placeholder='  park near..'
        onChange={(e)=> setSearch(e.target.value)}/>

        {/* Find Button */}
        <button className='block mx-auto mt-4 bg-blue-300 rounded px-4 py-2 w-[200px] h-10 cursor-pointer hover:bg-blue-800 hover:text-white '
        onClick={() => console.log(search)}>
            Find Parking
        </button>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-center text-gray-800">Popular Cities</h2>
        
        {/* City suggesatins */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            {cities.map((city, idx)=>(

                <div 
                key={idx}
                onClick={() => setSearch(city.name)}
                className="flex flex-col items-center cursor-pointer group">

                    <div className="p-4 rounded-full bg-gray-100 text-gray-500 group-hover:text-green-500 group-hover:bg-green-100 transition">
                        {city.icon}
                    </div>
                    <div className="mt-3 text-gray-700 font-medium group-hover:text-green-600">
                        {city.name}
                    </div>

                </div>
                
            ))}
            
        </div>

    </div>
  )
}

export default Search