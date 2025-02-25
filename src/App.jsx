import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [language, setLanguage] = useState("en");
  
  useEffect(() => {
    // Load the appropriate language data
    setLandingPageData(JsonData[language]);
  }, [language]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      {/* <Navigation /> */}
      <Navigation onLanguageChange={handleLanguageChange} data={landingPageData.Navigation}/>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} title={landingPageData.FeaturesSection?.title} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} sectionData={landingPageData.ServicesSection}/>
      <Gallery data={landingPageData.Gallery} sectionData={landingPageData.GallerySection}/>
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact}/>
    </div>
  );
};

export default App;
  