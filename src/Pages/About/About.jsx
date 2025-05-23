import React from 'react';
import './About.css';
import { useEffect } from 'react';
import image_1 from '../../Assets/About/user1.jpg'
import image_2 from '../../Assets/About/user2.jpg'
import image_3 from '../../Assets/About/user3.jpg'
import image_4 from '../../Assets/About/user4.png'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='about'>
      <div className="about-heading">
        <h1>About Us</h1>
        <p>Connecting students with tutors for personalized education success</p>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to provide students with the resources and support they need to achieve their academic goals. We believe in the power of personalized education and the positive impact it can have on a student's life.</p>
      </div>

      <div className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Commitment:</strong> We are committed to the success of our students.</li>
          <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</li>
          <li><strong>Innovation:</strong> We seek out new and innovative ways to enhance the learning experience.</li>
          <li><strong>Excellence:</strong> We strive for excellence in everything we do.</li>
        </ul>
      </div>

      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={image_4} alt="Team Member 1" />
            <p><strong>Sachintha Roshan</strong></p>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src={image_4} alt="Team Member 2" />
            <p><strong>Thushara Navod</strong></p>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src={image_4} alt="Team Member 3" />
            <p><strong>Asjad Ahmed</strong></p>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src={image_4} alt="Team Member 3" />
            <p><strong>Fashan</strong></p>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <img src={image_4} alt="Team Member 3" />
            <p><strong>Santhosh</strong></p>
            <p>Team Member</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
