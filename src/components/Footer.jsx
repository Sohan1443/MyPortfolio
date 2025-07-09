import React from 'react'

import '../styles/footerStyle.css';

import { IoIosContact } from "react-icons/io";
import { FaLocationDot,FaInstagram ,FaGithubAlt  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className="footer-contact">
        <div className="ftCnt">
          <h3>Reach Out to me!</h3>
          <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>
        </div>
        <div className="contactMe">
          <div className='name-sec'>
            <div>
              <IoIosContact className='icons' />
            </div>
            <div>
              <h5>Name</h5>
              <p>Sohan</p>
            </div>
          </div>
          <div className="address">
            <div>
              <FaLocationDot className='icons' />
            </div>
            <div>
              <h5>Address</h5>
              <p>Basti, Uttar Pradesh 272002 , India.</p>
            </div>
          </div>

          <div className="phone">
            <div>
              < FaPhoneSquareAlt className='icons' />
            </div>
            <div>
              <h5>Mobile No.</h5>
              <p><Link>6307244638</Link></p>
            </div>
          </div>
          <div className="email">
            <div>
              < MdEmail className='icons' />
            </div>
            <div>
              <h5>Email</h5>
              <p><Link>sohan63072@gmail.com</Link></p>
            </div>
          </div>
          <div className="socialMedia">
            <h5>Stay Connected</h5>
            <div>
              <Link to="https://www.linkedin.com/in/sohan-kumar-80a751242" target='blank'> < FaLinkedin className='icons-media' /> </Link>
              <Link to="https://github.com/Sohan1443" target='blank'>  <FaGithubAlt  className='icons-media' /></Link>
              <Link to="https://www.instagram.com/gautam.sohan_59/profilecard/?igsh=amVpOHJjcXh0dDVl" target='blank'> < FaInstagram className='icons-media' /> </Link>

            </div>
          </div>
        </div>

      </div>
      <hr className='line' />
      <div className="footer-content">
        <p>© 2023 <span>Sohan</span>. All rights reserved | </p>
        <p> Designed and Developed by Sohan</p>
      </div>

    </>
  )
}
