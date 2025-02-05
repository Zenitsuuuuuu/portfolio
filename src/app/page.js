"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';


export default function Home() {
  const textRef = useRef(null);
  const aboutRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.style.setProperty('--background', '#0a0a0a');
      document.documentElement.style.setProperty('--foreground', '#ededed');
    } else {
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#0a0a0a');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-neutral-200 text-gray-900'}`}>

     <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

     <LandingPage isDarkMode={isDarkMode} />
     
     <AboutMe isDarkMode={isDarkMode} />
      {/* My Skills Section */}
<div id="skills" className={`container mx-auto mt-64 px-6 text-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-neutral-200 text-gray-900'}`}>
  <h2 className="text-3xl font-bold mb-8">My Skills</h2>
  <div className="grid mt-36 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
    {/* Skill Logos */}
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/html.png" alt="HTML" width={50} height={50} />
      <p className="mt-6">HTML</p>
    </div>
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/css.png" alt="CSS" width={50} height={50} />
      <p className="mt-6">CSS</p>
    </div>
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/javascriptt.png" alt="JavaScript" width={50} height={50} />
      <p className="mt-5">JavaScript</p>
    </div>
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/php.png" alt="PHP" width={60} height={60} />
      <p className="mt-4">PHP</p>
    </div>
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/laravel.png" alt="Laravel" width={110} height={110} />
      <p className="mt-3">Laravel</p>
    </div>
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/logo.png" alt="React" width={100} height={100} />
      <p className="mt-4">React</p>
    </div>
    <div className="flex flex-col items-center mt-10 justify-center p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/nextjs.png" alt="Next.js" width={90} height={90} />
      <p className="mt-12">Next.js</p>
    </div>
    <div className="flex flex-col items-center mt-10 justify-center p-4 hover:scale-125 transition-transform duration-300 ease-in-out">
      <Image src="/tailwind.png" alt="Next.js" width={70} height={70} />
      <p className="mt-8">Tailwind</p>
    </div>
  </div>
</div>

{/* My Projects Section */}
<div id="projects" className={`container mx-auto mt-64 px-6 text-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-neutral-200 text-gray-900'}`}>
  <h2 className="text-3xl font-bold mb-8">My Projects</h2>
  <div className="grid mt-36 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Project 1 */}
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image src="/project1.png" alt="Project 1" width={300} height={200} />
      <p className="mt-2 text-xl font-semibold">Liberty Polig Art</p>
      <p className="mt-2">Description of project 1.</p>
    </div>
    {/* Project 2 */}
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image src="/project2.png" alt="Project 2" width={300} height={200} />
      <p className="mt-2 text-xl font-semibold">Wear Alanies</p>
      <p className="mt-2">Description of project 2.</p>
    </div>
    {/* Project 3 */}
    <div className="flex flex-col items-center mt-10 p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      <Image src="/project3.png" alt="Project 3" width={300} height={200} />
      <p className="mt-2 text-xl font-semibold">My Portfolio</p>
      <p className="mt-2">Description of project 3.</p>
    </div>
  </div>
</div>
    </div>
  );
}
