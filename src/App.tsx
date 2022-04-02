import './App.css';
import React from "react";
import HeroSection from "./components/HeroSection";
import SloganMaker from "./components/SloganMaker";
import SloganFeatures from "./components/SloganFeatures";
import FreeProducts from "./components/FreeProducts";

const App: React.FC = () => {
  return (
      <div className="flex flex-col relative justify-center items-center h-auto bg-appBg">
          <HeroSection />
      </div>
  )
}

export default App;
