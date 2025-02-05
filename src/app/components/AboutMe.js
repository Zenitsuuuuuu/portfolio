import { useRef, useEffect, useState } from 'react';

export default function AboutMe({ isDarkMode }) {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;

      const aboutElement = aboutRef.current;
      const experienceElement = experienceRef.current;

      if (aboutElement && experienceElement) {
        const aboutRect = aboutElement.getBoundingClientRect();
        const experienceRect = experienceElement.getBoundingClientRect();

        if (aboutRect.top < window.innerHeight && isScrollingDown) {
          aboutElement.classList.add('show');
          aboutElement.classList.remove('reverse');
        } else if (aboutRect.top >= window.innerHeight && !isScrollingDown) {
          aboutElement.classList.add('reverse');
          aboutElement.classList.remove('show');
        }

        if (experienceRect.top < window.innerHeight && isScrollingDown) {
          experienceElement.classList.add('show');
          experienceElement.classList.remove('reverse');
        } else if (experienceRect.top >= window.innerHeight && !isScrollingDown) {
          experienceElement.classList.add('reverse');
          experienceElement.classList.remove('show');
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container py-40 mx-auto px-6 flex flex-col md:flex-row items-stretch mh-50 transition-opacity duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-neutral-200 text-gray-900'}`}>
      <div id="about" ref={aboutRef} className="md:w-1/2 animated-box">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <ul className="list-disc px-10 text-left">
          <li>
            <p className="text-xl mb-6">
              I'm Arvin Paulo Frondozo, a Bachelor of Science in Information Technology graduate from AMA Computer College Lipa,
              passionate about programming, web development, and continuous learning.
              I am always eager to enhance my skills and take on new challenges in the tech world.
            </p>
          </li>
        </ul>
      </div>
      <div id="experience" ref={experienceRef} className="md:w-1/2 animated-box animated-box-right">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <ul className="list-disc pl-5">
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
  );
}