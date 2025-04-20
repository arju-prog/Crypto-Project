import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {  lazy, Suspense } from "react";

import Home from './Pages/Home'
import Coins from './Pages/Coins'
import FeedbackForm from './Pages/Feedback'
import Coindata from './Pages/Coindata'


// const NewsApp = lazy(() => import('./Pages/News'))
import NewsApp  from './Pages/News'

function App() {


  return (
    <> 
    <Navbar />
      <div >
        {/* < Suspense fallback={<div>Loading...</div>}> */}
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={< Coindata/>} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/news" element={<NewsApp />}/>       
   </Routes>
   {/* </Suspense> */}
     
      </div>
    </>
  )
}

export default App
