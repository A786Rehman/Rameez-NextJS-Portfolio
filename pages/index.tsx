import Price from '@/components/Price';
import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'

import Services from '@/components/Services';
import Skills from '@/components/Skills';
import React, { useEffect, useState } from 'react'
import Reviews from '@/components/Reviews';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Projects from '@/components/Projects';
import PricingSection from '@/components/PricingSection';

const HomePage = () => {
  const [showNav,setShowNav]=useState(false);
  const showNavHandler=()=>setShowNav(true);
  const closeNavHandler=()=>setShowNav(false);

  useEffect(()=>{
AOS.init({
  duration:1000,
  easing:'ease',
  once:true,
  anchorPlacement:'top-bottom',
})
  },[])
  return (
    <div className='overflow-hidden ' id='home'>
      <NavbarMobile showNav={showNav} closeNav={closeNavHandler}/>
      <Navbar openNav={showNavHandler}/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Skills/>
      <Projects/>
      <PricingSection/>
      {/* <Price/> */}
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage