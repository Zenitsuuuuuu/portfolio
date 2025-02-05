import { useState } from 'react';

export default function NavBar({ isDarkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
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
  );
}