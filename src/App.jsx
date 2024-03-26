import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import ReviewCards from './components/ReviewCards';
import StartProject from './components/StartProject';
import Footer from './components/Footer';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='scroll-container w-full min-h-screen overflow-hidden text-white bg-zinc-800'>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <ReviewCards />
      <StartProject />
      <Footer />
    </div>
  );
}

export default App;