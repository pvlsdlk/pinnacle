import React, {useState} from 'react';
import DiscoverySection from '../components/DiscoverSection';
import { homeObjDiscover, homeObjAbout } from '../components/DiscoverSection/Data';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => (
    setIsOpen(!isOpen)
  )

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <DiscoverySection {...homeObjDiscover}/>
        <DiscoverySection {...homeObjAbout}/>
        <Footer />
    </>
  );
};

export default Home;