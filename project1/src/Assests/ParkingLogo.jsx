import React from "react";

const ParkNowLogo = ({ primaryColor = "#1B365D", size = "305px" }) => (
  <svg 
    width={size} 
    height="auto" 
    viewBox="0 0 450 150" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:drop-shadow-[0_4px_10px_rgba(27,54,93,0.25)] cursor-pointer"
  >
    {/* Circle */}
    <circle 
      cx="70" 
      cy="75" 
      r="55" 
      fill={primaryColor} 
      stroke="#FFFFFF" 
      strokeWidth="4"
    />
    
    {/* P letter */}
    <path 
      d="M60 100V50H80C90 50 98 57 98 67C98 77 90 84 80 84H60" 
      stroke="#FFFFFF" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    
    {/* Arrow */}
    <path 
      d="M60 95L60 110M60 110L50 100M60 110L70 100" 
      stroke="#FFFFFF" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />

    {/* Text */}
    <text 
      x="150" 
      y="90" 
      fontFamily="Arial" 
      fontWeight="bold" 
      fontSize="48" 
      fill={primaryColor}
    >
      PARK NOW
    </text>
  </svg>
);

export default ParkNowLogo;