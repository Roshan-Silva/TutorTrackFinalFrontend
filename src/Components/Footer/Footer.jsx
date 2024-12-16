import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import facebook_icon from '../../Assets/Icons/facebook.png'
import instagram_icon from '../../Assets/Icons/instagram.png'
import whatsapp_icon from '../../Assets/Icons/whatsapp.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-container-left">
            <h1>TutorTrack</h1>
            <p>TutorTrack connects students with qualified tutors, offering a comprehensive platform for personalized education and support. With a wide range of subjects and locations, it ensures a seamless and effective learning experience for everyone involved.</p>
        </div>

        <div className="footer-container-middle">
            <h2>Explore Here</h2>
            <ul className="footer-link-items">
                <Link to={'/'} style={{textDecoration:'none'}} className='footer-link-item'><li>Home</li></Link>
                <Link to={'/privacypolicy/privacypolicy'} style={{textDecoration:'none'}} className='footer-link-item'><li>Privacy Policy</li></Link>
                <Link to={'/about-us'} style={{textDecoration:'none'}} className='footer-link-item'><li>About us</li></Link>
                <Link to={'/contact-us'} style={{textDecoration:'none'}} className='footer-link-item'><li>Contact us</li></Link>
            </ul>
        </div>

        <div className="footer-container-right">
            <h2>Get in Touch</h2>
            <div className="get-in-touch-images">
                <img src={facebook_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="news-letter">
                <h2>Subscribe to Our News Letter</h2>
                <div className="news-letter-input">
                    <input type="text" placeholder='Enter your message here...' />
                    <button>subscribe</button>
                </div>
            </div>
        </div>
      </div>
      <hr />
      {/* <div className="footer-copyright">
        
        <div className="copyright">
        <p> © 2024 - TutorTrack All Rights Reserved</p>
        </div>
         <div className="privacy-policy">
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
        </div> 
      </div> */}
    </div>
  )
}

export default Footer
