import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import LeadershipCredentials from './components/LeadershipCredentials';
import About from './components/About';
import PhotoStrip from './components/PhotoStrip';
import LeadershipAchievements from './components/LeadershipAchievements';
import VisionMission from './components/VisionMission';
import RolesInitiatives from './components/RolesInitiatives';
import CSRImpact from './components/CSRImpact';
import Testimonials from './components/Testimonials';
import WorkValues from './components/WorkValues';
import GomathaSection from './components/GomathaSection';
import PersonalInsights from './components/PersonalInsights';
import MediaRecognition from './components/MediaRecognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Brands />
      <LeadershipCredentials />
      <About />
      <PhotoStrip />
      <LeadershipAchievements />
      <VisionMission />
      <RolesInitiatives />
      <CSRImpact />
      <Testimonials />
      <WorkValues />
      <GomathaSection />
      <PersonalInsights />
      <MediaRecognition />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;