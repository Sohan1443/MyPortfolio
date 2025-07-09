import React from 'react'

import '../styles/skillsStyle.css';

import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'MySQL', level: 85 },
    { name: 'MongoDB', level: 70 },
  ];

  return (
    <div className="skills-main-cnt">
      <h1 className='skills-h'>My Skills</h1>
      <div className="skills-main-head">
        <span></span>
        <h3>What i know</h3>
        <span></span>
      </div>
      <div className="skills-container">
        <div className="skills-content">
          <h2>My creative skills & experiences</h2>
          <p>I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development began with a fascination for technology and a desire to build innovative solutions that enhance user experiences.</p>
          <br />
          <p>With a <strong> strong foundation in HTML, CSS, JavaScript, React.Js and Node.Js and Express.Js </strong>, I have honed my skills in both front-end and back-end development. I enjoy tackling challenges and continuously learning new technologies to stay updated in this ever-evolving field.</p>
          <br />
          <p>I believe in the power of collaboration and am always eager to connect with fellow developers and tech enthusiasts. Let's build something amazing together!</p>
          <button className='read-btn'><Link to='/projects' className='read-project'>Read More <IoMdArrowDropright className='btn-icon'/></Link> </button>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-active"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
