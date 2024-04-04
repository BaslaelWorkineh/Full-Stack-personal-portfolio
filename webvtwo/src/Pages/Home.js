import React, {useEffect, useState} from 'react';
import { Header } from '../components/ScrollupandHeader';
import HeroSection from '../components/Hero';
import ServicesSection from '../components/Services'; // Correct import
import PortfolioSection from '../components/Portfolio';
import Resume from '../components/Resume';
import SkillsSection from '../components/Skills';
import TestimonialSection from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import WOW from 'wowjs';
import 'animate.css/animate.min.css'; // Import Animate.css styles


function Home() {
    useEffect(() => {
        // Initialize WOW.js when the component mounts
        new WOW.WOW({
          boxClass: 'wow',         // Class name of the elements to animate
          animateClass: 'animated', // Class name used for animations (from animate.css)
          offset: 0,               // Distance in pixels to trigger the animation
          mobile: true,            // Enable/disable animations on mobile devices
          live: true               // Enable/disable live initialization (for dynamically loaded content)
        }).init();
      }, []); // Empty dependency array ensures useEffect runs only once
    
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <Resume />
      <SkillsSection />
      <TestimonialSection/>
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
      
    </div>
  )
}

export default Home;
