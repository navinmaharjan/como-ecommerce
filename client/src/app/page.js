import AdBanner from '@/components/AdBanner'
import BestSeller from '@/components/BestSeller'
import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <NewArrivals />
      <AdBanner />
      <BestSeller />
    </div>
  )
}

export default Home