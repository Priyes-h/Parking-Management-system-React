
import React, { useState } from 'react'


// parking fees

function Payment() {
  const parking = { fees: 67 }


  // form data state

  const [data, setData] = useState({
    Name: "",
    Email: "",
    VehicleNumber: "",
    ParkingAddress: "",
    ParkingDuration: 0,
    ParkingSpots: 1,
  })



  // form data change handler

  async function handleSubmit(e) {
  e.preventDefault()

   // ❌ validation
  if (
    !data.Name ||
    !data.Email ||
    !data.VehicleNumber ||
    !data.ParkingAddress ||
    data.ParkingDuration <= 0
  ) {
    alert("Please fill all fields properly ❌")
    return
  }

  console.log('submit', data)

  try {
    const res = await fetch("http://127.0.0.1:8000/save-trip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await res.json()
    console.log("Saved:", result)

    alert("Trip saved ✅")

  } catch (error) {
    console.error("Error:", error)
    alert("Something went wrong ❌")
  }
}

  function handleChange(e) {
  const { name, value } = e.target

  setData(prev => ({
    ...prev,
    [name]:
      name === "ParkingDuration" || name === "ParkingSpots"
        ? Number(value) : value
  }))
}

  // calculate total fee

  const duration = data.ParkingDuration
  const spots = data.ParkingSpots
  const total = parking.fees * duration * spots

  return (

    // main container
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">

      {/* header */}

      <header className="w-full max-w-5xl">
        <div className="bg-linear-to-r from-sky-500 to-violet-600 text-white rounded-xl p-5 shadow-md flex items-center gap-4">
          <div className="bg-white/20 rounded-full p-2">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Park It Now !!!</h1>
            <p className="text-sm opacity-90">Reserve a spot quickly — secure payments</p>
          </div>
        </div>
      </header>



      {/* main content */}

      <main className="w-full max-w-5xl mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* booking form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 space-y-6">
    
          <h2 className="text-2xl font-semibold text-gray-800">Book Your Parking</h2>


          {/* form fields */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">


            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
              <input id="name" name="Name" type="text" value={data.Name} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Rahul sir" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="Email" type="email" value={data.Email} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="rahulsir@wap.com" />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">Vehicle number</label>
              <input id="vehicle" name="VehicleNumber" type="text" value={data.VehicleNumber} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="UP16HR0001" />
            </div>
          </section>


          {/* parking details */}


          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Parking address</label>
              <input id="address" name="ParkingAddress" type="text" value={data.ParkingAddress} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Patna, Bihar" />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (hrs)</label>
              <input id="duration" name="ParkingDuration" type="number" min="0" value={data.ParkingDuration} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </div>

            <div>
              <label htmlFor="spots" className="block text-sm font-medium text-gray-700">Spots</label>
              <input id="spots" name="ParkingSpots" type="number" min="1" value={data.ParkingSpots} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </div>
          </section>


        {/* total and submit */}
        
          <div className="flex items-center justify-between pt-2">
            <div className="text-sm text-gray-600">Parking fee <span className="font-medium text-gray-800">${parking.fees}/hr</span></div>
            <div className="text-lg font-semibold text-gray-900">Total: <span className="ml-2 text-sky-600">${total}</span></div>
          </div>


        {/* submit button */}


          <div className="pt-3">
            <button type="submit"
              className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-linear-to-r from-sky-500 to-violet-600 px-4 py-2 text-white font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400">
              Proceed to Pay
            </button>
          </div>
        </form>
 
 
        {/* payment summary */}


        <aside className="hidden lg:block bg-white rounded-xl shadow-sm p-6 sticky top-6 h-fit">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Summary</h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Parking fee</span>
              <span className="font-medium text-gray-800">${parking.fees}/hr</span>
            </div>

            <div className="flex justify-between">
              <span>Duration</span>
              <span className="font-medium text-gray-800">{duration} hr</span>
            </div>

            <div className="flex justify-between">
              <span>Spots</span>
              <span className="font-medium text-gray-800">{spots}</span>
            </div>

            <div className="border-t pt-3 mt-2 flex justify-between items-end">
              <span className="font-semibold text-gray-700">Total</span>
              <span className="text-xl font-bold text-sky-600">${total}</span>
            </div>

            <p className="mt-3 text-xs text-gray-500">You will be redirected to a secure payment gateway after clicking proceed.</p>
          </div>
        </aside>
      </main>

      {/* footer */}

      <footer className="w-full max-w-5xl mt-8 text-center text-sm text-gray-500">
        © ParkingN — Fast & Secure Parking Reservations
      </footer>
    </div>
  )
}

export default Payment
