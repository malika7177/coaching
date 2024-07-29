import React from 'react'
import './services.css'
import GoodToKnow from '../../components/goodToKnow/GoodToKnow'
import ServicesHero from '../../components/servicesHero/ServicesHero'
import SHelp from '../../components/sHelp/SHelp'
import ServicesHow from '../../components/servicesHow/ServicesHow'

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <SHelp />
      <ServicesHow />
      <GoodToKnow />
    </div>
  )
}

export default Services
