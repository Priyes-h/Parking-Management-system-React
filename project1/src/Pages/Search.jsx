import React from 'react'
import { useState, useEffect } from 'react'
import { Building2, Landmark, Building, Home, MapPin, Search } from "lucide-react"
import { useNavigate } from "react-router-dom";

function Seearch({ data }) {
  const navigate = useNavigate()
  let [query, setquery] = useState("")
  const [choose,setchose] = useState({
    name : null,
    lat : null,
    long : null,
    capacity : null,
    parkingFee : null,
    parkingType : null,
    Formatted : null,
  })

  const filteredData = data.filter((place) =>
    place.properties.formatted
      ?.toLowerCase()
      .includes(query.toLowerCase())
  )

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
    <>
      {/* 🔍 Search Input */}
      <div className="flex justify-center">
        <div className="relative w-[450px] m-[20px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <input
            value={query}
            onChange={(e) => setquery(e.target.value)}
            type="text"
            placeholder="Search parking address here"
            className="placeholder-white w-full h-[55px] pl-10 pr-4 py-3 bg-white dark:bg-gray-800
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

      {/* 📦 Filtered Results */}
      <div className="flex flex-col items-center gap-3">
        {query && filteredData.map((place, i) => (
          <div
            key={place.properties.place_id || i}
        onClick={() => {
                        const selected = {
                          name: place.properties.name,
                          lat: place.geometry.coordinates[1],
                          long: place.geometry.coordinates[0],
                          capacity: place.properties.datasource?.raw?.capacity || 10,
                          parkingFee: place.properties.parking?.fee === false ? "Free" : 67,
                          parkingType: place.properties.parking?.type || "general",
                          formatted: place.properties.formatted,
                        };

                        setchose(selected);

                        navigate("/ParkingChoose", {
                          state: { selected },
                        });
}}
            className="w-[450px] bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
          >
            <h3>📍 {place.properties.name || "Parking"}</h3>
            <p>{place.properties.formatted}</p>
          </div>
        ))}
      </div>

      {/* 🏙️ City Suggestions (ONLY when input is empty) */}
      {query.trim() === "" && (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-[130px] gap-y-[51px] gap-x-[20px] text-center">
          {cities.map((city, idx) => (
            <div
              key={idx}
              onClick={() => setquery(city.name)}   // ✅ fixed
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="p-4 rounded-full bg-gray-100 text-gray-500 
                              group-hover:text-green-500 group-hover:bg-green-100 transition">
                {city.icon}
              </div>

              <div className="mt-3 text-gray-700 font-medium group-hover:text-green-600">
                {city.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Seearch