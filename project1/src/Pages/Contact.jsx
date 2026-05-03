import React from 'react'

function Contact() {
  return (
    <div className='mx-auto max-w-4xl px-4 py-10 text-center'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <p className='text-base leading-7 text-slate-700 sm:text-lg'>
        Have a question, bug report, or partnership idea? Reach out to us and we will get back to you soon.
      </p>
      <div className='mt-8 grid gap-4 sm:grid-cols-2'>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='font-semibold mb-2'>Email</h2>
          <p>contact@parknow.app</p>
        </div>
        <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
          <h2 className='font-semibold mb-2'>Phone</h2>
          <p>+91 12345 67890</p>
        </div>
      </div>
    </div>
  )
}

export default Contact