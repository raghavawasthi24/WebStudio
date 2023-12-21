import React from 'react'
import Header from '../../components/Header'
import HeroSection from './sections/HeroSection'
import Companies from './sections/Companies'
import Pricing from './sections/Pricing'

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <HeroSection/>
      <Companies/>
      <Pricing/>
    </div>
  )
}
