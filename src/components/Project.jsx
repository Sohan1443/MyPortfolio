import React from 'react'
import '../styles/projectStyle.css'
import { Link } from 'react-router-dom';
import pastApp from '../assets/PastApp_project.png';
import myportfolio   from '../assets/myPortfolio.png';
import analyers from '../assets/numberAn.png';
import { MdKeyboardArrowRight } from "react-icons/md";
export default function Project() {
  return (
    <>
      <div className="project-container">
        <div className="project-head">
          <h1 className="heading">My Projects</h1>
          <div className="head-disc">
            <span></span>
            <h2>check my work</h2>
            <span></span>
          </div>
        </div>
        <div className="project-content">
          <Link to='https://paste-app-beta-six.vercel.app/'  target='blank'>
          <div className="project-card">
            <img src={pastApp} alt="PastApp Project" />
            <p>PastApp is a React.js-based personal notes app that lets users save daily thoughts, tips, or reminders using a title and description.</p>
            {/* <button className='project-btn'>Click me  <MdKeyboardArrowRight /></button> */}
          </div>
          </Link>
          <Link to='https://number-analyzer-web-app.vercel.app/'  target='blank'>
          <div className="project-card">
            <img src={analyers} alt="PastApp Project" />
            <p>Number Analyzers is a web-based tool built with HTML, CSS, and JavaScript to check number properties like Prime, Buzz, Automorphic, Amicable, Factorial, and more..</p>
            {/* <button className='project-btn'>Click me  <MdKeyboardArrowRight /></button> */}
          </div>
          </Link>
          <Link to='https://sohan-portfolio-five.vercel.app/'  target='blank'>
          <div className="project-card">
            <img src={myportfolio} alt="PastApp Project" />
            <p>A personal portfolio website built with React.js and Vite to showcase my projects, skills, and contact information.</p>
            {/* <button className='project-btn'>Click me  <MdKeyboardArrowRight /></button> */}
          </div>
          </Link>
    
        </div>
      </div>
    </>
  )
}
