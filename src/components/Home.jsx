import React, { useState, useEffect } from 'react'

import '../styles/home.css'
import { FaHandSparkles } from "react-icons/fa";
import homeImage from '../assets/Sohan.png'; // Adjust the path as necessary

export default function Home() {
  const words = [
    "Web developer ",
    "Front End developer ",
    "Full Stack Developer ",
    "Backend Developer "
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    let charIndex = 0;
    const word = words[wordIndex];
    const interval = setInterval(() => {
      setDisplayedText(word.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex > word.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 700);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi <FaHandSparkles className='hiIcon' />, I'm Sohan,<br/>A passionate
            <span> {displayedText}</span>
          </p>
          <p>Explore my projects and skills below.</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Home" />
        </div>
      </div>
    </>
  )
}
