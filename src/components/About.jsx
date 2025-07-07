import React, { useState , useEffect } from 'react'
import '../styles/about.css'
import aboutImage from '../assets/SohanImg.png'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export default function About() {

  const [linkdin, setLinkdin] = useState(false)
  const [github, setGithub] = useState(false)
  const [instagram, setInstagram] = useState(false)

  function handleEnterLinkdin() {
    setLinkdin(true)
  }
  function handleLeaveLinkdin() {
    setLinkdin(false)
  }
  function hanldeEnterGithub() {
    setGithub(true)
  }
  function handleLeaveGithub() {
    setGithub(false)
  }
  function haldeEnterInstagram() {
    setInstagram(true)
  }
  function handleLeaveInstagram() {
    setInstagram(false)
  }


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
      <div className="about-container">
        <div className="about-heading">
          <h1>About me</h1>
          <div className="aboutPara">
            <span></span>
            <p>who am i</p>
            <span></span>
          </div>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="Image Sohan" />
            <div className="contactIcon">
              <NavLink to="https://www.linkedin.com/in/sohan-kumar-80a751242" target='blank'>
                <button onMouseEnter={handleEnterLinkdin} onMouseLeave={handleLeaveLinkdin}>< IoLogoLinkedin className='Icons' /></button>
                {linkdin ? <span> Linkdin</span> : ""}
              </NavLink>
              <NavLink to="https://github.com/Sohan1443" target='blank'>
                <button onMouseEnter={hanldeEnterGithub} onMouseLeave={handleLeaveGithub}><  FaGithubAlt className='Icons' /></button>
                {github ? <span> Github</span> : ""}
              </NavLink>
              <NavLink to="https://www.instagram.com/gautam.sohan_59/profilecard/?igsh=amVpOHJjcXh0dDVl" target='blank'>
                <button onMouseEnter={haldeEnterInstagram} onMouseLeave={handleLeaveInstagram}>< FaInstagram className='Icons' /></button>
                {instagram ? <span> Instagram</span> : ""}
              </NavLink>

            </div>
          </div>
          <div className="about-text">
            <h2>Hi, I'm Sohan <span className='develop'> {displayedText}</span></h2>
            <p>
              I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development began with a fascination for technology and a desire to build innovative solutions that enhance user experiences.
            </p>
            <p>
              With a <strong> strong foundation in HTML, CSS, JavaScript, React.Js and Node.Js and Express.Js </strong>, I have honed my skills in both front-end and back-end development. I enjoy tackling challenges and continuously learning new technologies to stay updated in this ever-evolving field.
            </p>
            <p>
              I have worked on various projects, ranging from simple static websites to complex web applications. My goal is to create user-friendly interfaces and efficient back-end systems that deliver seamless performance.</p>  
            <p>
              I believe in the power of collaboration and am always eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!   </p>

        </div>
        </div>
      </div>
    </>
  )
}
