import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export default function LandingPage({ isDarkMode }) {
  const textRef = useRef(null);
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

  return (
    <div className="container py-10 md:py-44 mx-auto px-6 flex-col-reverse flex md:flex-row items-center">
      {/* Text Section */}
      <div
        ref={textRef}
        className="md:w-1/2 opacity-0 transform -translate-x-10 transition-all duration-1000 ease-in-out"
      >
        <h1 className="text-4xl mb-4">
          Hi,
        </h1>
        <h1 className="text-4xl mb-4">
          I'm <span className=' text-HighlightText text-[35px] sm:text-[40px] md:text-[40px] xl:text-[60px] font-bold'>Arvin Paulo Frondozo</span>
        </h1>
        <p className="text-xl mb-6">
          <span className='text-HighlightText font-bold '>Junior Web Developer </span>  with a passion for building beautiful and functional web applications. 
        </p>
        <a href="/path/to/your-cv.pdf" download className="inline-block px-6 py-2 mt-4 text-lg font-semibold  bg-yellow-600 rounded hover:bg-yellow-700 transition-colors duration-300">
          Download CV
        </a>
      </div>

      {/* Image Section with SVG Background */}
      <div className="md:w-1/2 md:mt-0 flex justify-center md:justify-end">
        <div className="relative h-72 w-72 md:h-96 md:w-96 lg:h-[520px] lg:w-[520px]  object-cover">
          <Image
            src="/arvin1.png" // Replace with your actual image path
            alt="Arvin's Graduation Picture"
            layout="fill"
            objectFit="cover"
            quality={75} 
            className="relative z-10 rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}