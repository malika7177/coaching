import React from 'react'
import AboutHero from '../../components/aboutHero/AboutHero'
import Companies from '../../components/companies/Companies'
import AboutClients from '../../components/aboutClients/AboutClients'
import HowAbout from '../../components/howAbout/HowAbout'
import GoodToKnow from '../../components/goodToKnow/GoodToKnow'

const About = () => {
  return (
    <div>
      <AboutHero />
      <Companies />
      <AboutClients />
      <HowAbout />
      <GoodToKnow />
    </div>
  )
}

export default About
