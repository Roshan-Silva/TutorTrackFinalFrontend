import React from 'react'
import { useEffect } from 'react'
import './Homepage.css'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import HomeCityDisplay from '../../Components/HomeCityDisplay/HomeCityDisplay'
import HomeTutorsDisplay from '../../Components/HomeTutorsDisplay/HomeTutorsDisplay'
import Testimonials from '../../Components/Testimonials/Testimonials'
import GetOurService from '../../Components/GetOurService/GetOurService'
import FAQ from '../../Components/FAQ/FAQ'
import SearchContainer from '../../Components/SearchContainer/SearchContainer'
import Navbar from '../../Components/Navbar/Navbar'

import Footer from '../../Components/Footer/Footer'
import privacypolicy from '../../Components/privacypolicy/privacypolicy'

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

   
    <div className='homepage'>

         <Header />
         <Hero />
         <SearchContainer/>
        
         <Testimonials />
         <GetOurService />
         <FAQ />
        <Footer/> 
    </div>
    
  )
}

export default Homepage
