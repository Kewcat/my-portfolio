import React from 'react';
import Navbar from './components/Navbar.jsx'; 
import Hero from './components/Hero.jsx'
import Technologies from './components/Technologies.jsx';
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx"
import Contacts from "./components/Contacts.jsx"
export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Background gradient circles */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-8"> 
        <Navbar /> 
        <Hero/>
        <Technologies/>
        <Projects/>
        <Experience/>
        <Contacts/>
      </div>
    </div>
  );
};

