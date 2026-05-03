import React from 'react'

function About() {
  const members = [
  { src: '/Assests/developer1.jpeg', alt: 'Ayushmaan Da Developer' },
  { src: '/Assests/developer2.jpeg', alt: 'Asmit Da Developer' },
  { src: '/Assests/developer3.jpeg', alt: 'Priyesh Da Developer' },
  { src: '/Assests/devGang.jpeg', alt: 'Developer Gang' },
  { src: '/Assests/Rahul sir.jpeg', alt: 'Rahul sir' },
];
// duplicate
const loopMembers = [...members, ...members]
  return (
    <div className='mx-auto max-w-6xl px-4 py-8 lg:px-8'>
      <div className='space-y-6'>
        <h1 className='text-3xl font-bold text-center'>About Us</h1>
        <p className='text-base leading-7 text-slate-700 sm:text-lg'>
          We are a team of 3 Brilliant Students dedicated to creating innovative solutions for parking management.
          As we know there is a huge gap in the parking management system, wherever we go we waste a significant amount
          of our time finding a parking spot. It gets worse in humid and hot summer weather, so we are here to fill that gap
          with our project. Our mission is to simplify the parking experience for both users and administrators,
          making it more efficient and user-friendly.
        </p>
        <h2 className='text-2xl font-bold text-center'>Our Team</h2>
      </div>
<div className="mt-10 overflow-hidden">
  <div className="flex gap-6 animate-scroll">

    {loopMembers.map((member, index) => (
      <div
        key={index}
        className="group relative min-w-[180px] sm:min-w-[220px] shrink-0 rounded-3xl bg-white p-3 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        {/* Image */}
        <img
          src={member.src}
          alt={member.alt}
          className="h-56 w-full rounded-2xl object-cover transition duration-300 group-hover:brightness-75"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="bg-black/60 text-white text-sm px-3 py-1 rounded-lg mb-3">
            {member.alt}
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_0_30px_rgba(168,85,247,0.6)]"></div>
      </div>
    ))}

  </div>
</div>
    </div>
  )
}

export default About
