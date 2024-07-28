import React from 'react'
import './sales.css'
import How from '../../components/how/How'
import Testimonials from '../../components/testimonials/Testimonials'
import Book from '../../components/book/Book'
import SalesHero from '../../components/salesHero/SalesHero'

const Sales = () => {
  return (
    <div>
      <SalesHero />
      <How />
      <Testimonials />
      <Book />
    </div>
  )
}

export default Sales
