import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function PreviousTrips() {
  const [trips, setTrips] = useState([])
  const navigate = useNavigate()

  // Fetch trips from backend
  useEffect(() => {
      fetchTrips()
  }, [])

  const fetchTrips = async ()=>{
    try{
      const res = await fetch("http://127.0.0.1:8000/trips")
      const data = await res.json()
      setTrips(data)
    } 
    catch (error){
      console.error("Error fetching trips:", error)
    }
  }

  return(
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Previous Trips 
      </h1>

      {/* If no trips */}
      {trips.length === 0 ? (
        <p className="text-gray-500">No trips yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {trips.map((trip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >
              {/* Name */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {trip.Name}
              </h2>

              {/* Email */}
              <p className="text-sm text-gray-500 mb-3">
                {trip.Email}
              </p>

              {/* Details */}
              <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-medium">Vehicle:</span>{trip.VehicleNumber}</p>
                <p><span className="font-medium">Address:</span>{trip.ParkingAddress}</p>
                <p><span className="font-medium">Duration:</span>{trip.ParkingDuration} hrs</p>
                <p><span className="font-medium">Spots:</span>{trip.ParkingSpots} hrs</p>
              </div>

              {/* Footer */}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  Trip #{index + 1}
                </span>
                <span className="text-sm font-semibold text-sky-600">
                  Completed
                </span>
              </div>

              <button
                  onClick={() =>
                    navigate("/payment", {
                      state: trip,
                    })
                  }
                  className="mt-3 w-full bg-sky-500 text-white py-1 rounded hover:bg-sky-600"
                >
                  Repeat Booking 
                </button>
            </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default PreviousTrips


