"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Home() {
  const textRef = useRef(null);
  const aboutRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      textElement.style.opacity = '1';
      textElement.style.transform = 'translateX(0)';
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    
  }, []);

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
      {/* Navigation Bar */}
      <nav className="p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">@Arvin</div>
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#skills" className="hover:text-gray-400">Skills</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="ml-4 p-2 bg-High rounded flex items-center">
            <label className="switch">
              <input  type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
          </div>
        </div>
       
      </nav>

      {/* Main Content */}
      <div className="container py-60 mx-auto px-6 flex-col-reverse flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div
          ref={textRef}
          className="md:w-1/2 opacity-0 transform -translate-x-10 transition-all duration-1000 ease-in-out"
        >
          <h1 className="text-4xl mb-4">
            Hi,
          </h1>
          <h1 className="text-4xl mb-4">
             I'm <span className=' text-HighlightText text-[70px] font-bold'>Arvin Paulo Frondozo</span>
          </h1>
          <p className="text-xl mb-6">
            I'm a <span className='text-HighlightText font-bold'>Junior Web Developer </span>  with a passion for building beautiful and functional web applications. 
          </p>
          <a href="/path/to/your-cv.pdf" download className="inline-block px-6 py-2 mt-4 text-lg font-semibold  bg-yellow-600 rounded hover:bg-yellow-700 transition-colors duration-300">
            Download CV
          </a>
        </div>

        {/* Image Section with SVG Background */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-96 h-96 object-cover">
            {/* Graduation Image */}
            <Image
              src="/arvin.png" // Replace with your actual image path
              alt="Arvin's Graduation Picture"
              layout="fill"
              objectFit="cover"
              className="relative z-10 rounded-lg "
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className={`container py-40 mx-auto px-6 flex flex-col md:flex-row items-stretch mh-50 transition-opacity duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-neutral-200 text-gray-900'}`}>
        <div id="about" className={`md:w-1/2 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <ul className="list-disc pl-5 text-justify mr-10">
            <li>
              <p className="text-xl mb-6">
                I'm Arvin Paulo Frondozo, a Bachelor of Science in Information Technology graduate from AMA Computer College Lipa,
                passionate about programming, web development, and continuous learning.
                I am always eager to enhance my skills and take on new challenges in the tech world.
              </p>
            </li>
          </ul>
        </div>
        <div id="experience" className={`md:w-1/2 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <ul className="list-disc pl-5 text-justify">
            <li>
              <p className="text-xl mb-6">
                Erovoutika Technologies Inc. - Front-End Developer Intern   <br />
                May 2021 - August 2021
              </p>
            </li>
            <li>
              <p className="text-xl mb-6">
                Alorica Philippines - Customer Service Representative   <br />
                2022-2023
              </p>
            </li>
            <li>
              <p className="text-xl mb-6">
                Freelance Web Developer   <br />        
              </p>
            </li>
          </ul>
        </div>
      </div>
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
