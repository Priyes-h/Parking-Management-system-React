import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Building2, Landmark, Building, Home, MapPin, Search, CreditCard, Clock, Plus, Minus } from "lucide-react"


function ParkingChoose() {
  // fetching from search 
  let navigate = useNavigate()
  const location = useLocation();
  const data = location.state?.selected;

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [duration, setDuration] = useState(1); // Default is 1 hour

  if (!data) return <p>No data found</p>;

  // Functions to handle 1 hour increments
  const addTime = () => setDuration(prev => prev + 1);
  const removeTime = () => setDuration(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6 md:flex-row md:items-start md:justify-center">

      {/* LEFT SIDE → SLOTS */}
      <div className="w-full grid grid-cols-2 gap-3 sm:grid-cols-3 md:w-1/2 xl:grid-cols-4">
        {Array.from({ length: data.capacity }, (_, i) => {
          const slotName = `P-${i + 1}`;

          return (
            <div
              key={i}
              onClick={() => setSelectedSlot(slotName)}
              className={`w-16 h-16 flex items-center justify-center rounded cursor-pointer border
                ${selectedSlot === slotName
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {slotName}
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE → DETAILS */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1B365D] to-blue-800 rounded-3xl p-8 text-white shadow-2xl transition-all hover:scale-[1.02] border border-blue-400/30">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">{data.name}</h1>
          <p className="text-blue-100 text-sm font-medium flex items-center gap-1">
            <span className="opacity-70">📍</span> {data.formatted}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          
          {/* DURATION SELECTOR WITH PLUS/MINUS */}
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300 flex items-center gap-2">
              <Clock size={14} /> Duration
            </p>
            <div className="flex items-center gap-3 bg-blue-900/40 w-fit px-2 py-1 rounded-xl border border-white/10">
              <button 
                onClick={removeTime}
                className="p-1 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Minus size={18} />
              </button>
              
              <span className="text-xl font-bold min-w-[70px] text-center">
                {duration} <span className="text-sm font-normal">hr</span>
              </span>

              <button 
                onClick={addTime}
                className="p-1 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <div className="space-y-1 text-right md:text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Space Type</p>
            <p className="text-xl font-medium tracking-tight flex items-center justify-end md:justify-start gap-2">
              🚗 {data.parkingType}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Total Capacity</p>
            <p className="text-xl font-medium tracking-tight flex items-center gap-2">
              🅿️ {data.capacity} Slots
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Rate</p>
            <p className="text-xl font-bold text-yellow-400">
              {data.parkingFee === "Free" ? "Free 🆓" : `₹${50 * duration}`}
            </p>
          </div>
        </div>

        {/* Action Section */}
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-white text-blue-700 font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-50 active:scale-95 transition-all flex items-center justify-center gap-2"
            onClick={() => window.open(`https://www.google.com/maps?q=${data.lat},${data.long}`, "_blank")}
          >
            <span>OPEN MAP VIEW</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </button>

          <div className="flex items-center justify-between px-2">
            <span className="text-xl text-blue-200">Current Selection</span>
            <span className="bg-green-400/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-400/30">
              ✅ {selectedSlot || "None"}
            </span>
          </div>
          
          <button
            onClick={() => navigate("/payment", { state: { selected: data, slot: selectedSlot, duration } })}
            className="group relative w-full hover:scale-[105%] bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 font-black text-lg py-5 px-8 rounded-2xl shadow-[0_10px_20px_rgba(234,179,8,0.3)] transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden"
          >
            <CreditCard size={24} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
            <span className="tracking-tight">PROCEED TO PAYMENT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParkingChoose;