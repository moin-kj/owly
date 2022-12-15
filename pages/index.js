import React, { useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import HeroSection from '../components/heroSection';
import Conceptualizing from '../components/Conceptualizing';
import ReachGols from '../components/reachGols';
import Workflow from '../components/workFlow';
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
    });
  }, []);


  return (
    <div>
      <Header/>
      <HeroSection/>
      <Conceptualizing/>
      <ReachGols />
      <Workflow />
    <Footer/>
    </div>
  )
}

export default Home;