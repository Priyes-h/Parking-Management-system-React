import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PreviousTrips from './Pages/PreviousTrips'
import ParkingChoose from './Pages/ParkingChoose'
import Payment from './Pages/Payment'
function App() {


  return (
    <>
   {/* <h1>Hello parking world  </h1>
    */}
   <Navbar/>
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/previoustrips' element={<PreviousTrips/>}></Route>
    <Route path='/ParkingChoose' element={<ParkingChoose/>}></Route>
    <Route path='/Payment' element={<Payment/>}></Route>
   </Routes>
    </>
  )
}

export default App
