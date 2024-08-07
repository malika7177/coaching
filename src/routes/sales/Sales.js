import React from 'react'
import './sales.css'
import How from '../../components/how/How'
import Testimonials from '../../components/testimonials/Testimonials'
import Book from '../../components/book/Book'
import SalesHero from '../../components/salesHero/SalesHero'
import HowAbout from '../../components/howAbout/HowAbout'
import GoodToKnow from '../../components/goodToKnow/GoodToKnow'
import Guarantee from '../../components/guarantee/Guarantee'
import ProCons from '../../components/proCons/ProCons'

const Sales = () => {
  return (
    <div>
      <SalesHero />
      <HowAbout />
      <How />
      <Testimonials />
      <ProCons />
      <Book />
      <Guarantee />
      <GoodToKnow />
    </div>
  )
}

export default Sales
