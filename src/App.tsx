import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import AchievementStats from './components/AchievementStats';
import CredibilityCards from './components/CredibilityCards';
import About from './components/About';
import ProfessionalServices from './components/ProfessionalServices';
import ProfessionalJourney from './components/ProfessionalJourney';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Brands />
      <AchievementStats />
      <CredibilityCards />
      <About />
      <ProfessionalServices />
      <ProfessionalJourney />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;