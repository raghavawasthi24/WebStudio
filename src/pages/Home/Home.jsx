import React from 'react'
import Header from '../../components/Header'
import HeroSection from './sections/HeroSection'
import Companies from './sections/Companies'
import Pricing from './sections/Pricing'
import Footer from '../../components/Footer'
import Contact from './sections/Contact'

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection/>
      <Companies/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}
