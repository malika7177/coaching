import React from 'react'
import './guide.css'
import GuideHome from '../../components/guideHero/GuideHero'
import Testimonials from '../../components/testimonials/Testimonials'
import How from '../../components/how/How'
import Download from '../../components/download/Download'

const Guide = () => {
  return (
    <div className='guide-page'>
      <GuideHome />
      <Testimonials />
      <How />
      <Download />
    </div>
  )
}

export default Guide
