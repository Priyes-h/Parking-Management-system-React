import React, { useEffect } from 'react'
import { useState } from 'react'
import { Building2, Landmark, Building, Home, MapPin,Search} from "lucide-react"
import { useNavigate } from "react-router-dom";

function Seearch({data}) {
    const navigate = useNavigate()
    let [query,setquery] = useState("")
     const filteredData = data.filter((place) =>
    place.properties.formatted
      ?.toLowerCase()
      .includes(query.toLowerCase())
  )
  return (
   <>
  <div className="flex justify-center">
      <div className="relative w-[450px] m-[20px]">
        
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

        <input
          value={query}
          onChange={(e) => setquery(e.target.value)}
          type="text"
          placeholder="Search parking address here"
          className=" placeholder-white w-full h-[55px] pl-10 pr-4 py-3 bg-white dark:bg-gray-800
                     border border-gray-300 dark:border-gray-600
                     rounded-lg
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     dark:focus:ring-blue-400 dark:focus:border-blue-400
                     transition-all duration-200
                
                     text-gray-900 dark:text-gray-100
                     hover:border-gray-400 dark:hover:border-gray-500
                     shadow-sm"
        />
      </div>
    </div>
      <div className="flex flex-col items-center gap-3">
        {query && filteredData.map((place, i) => (
          <div
            key={place.properties.place_id || i}
            onClick={()=>(navigate("/ParkingChoose"))}
            className="w-[450px] bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h3>📍 {place.properties.name || "Parking"}</h3>
            <p>{place.properties.formatted}</p>
          </div>
        ))}
      </div>

</>
)}


export default Seearch