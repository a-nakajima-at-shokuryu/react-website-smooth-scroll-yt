import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection'; 
import InfoSection from '../components/InfoSection';
import {
  homeObjeOne, 
  homeObjeTwo, 
  homeObjeThree, 
} from '../components/InfoSection/Data';
import Services from '../components/Services';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjeOne} />
      <InfoSection {...homeObjeTwo} />
      <Services />
      <InfoSection {...homeObjeThree} />
    </>
  );
};

export default Home;
