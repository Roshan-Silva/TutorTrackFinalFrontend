import React from 'react';
import './About.css';
import { useEffect } from 'react';
import image_1 from '../../Assets/About/user1.jpg'
import image_2 from '../../Assets/About/user2.jpg'
import image_3 from '../../Assets/About/user3.jpg'
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
            <img src={image_1} alt="Team Member 1" />
            <p><strong>John Doe</strong></p>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={image_2} alt="Team Member 2" />
            <p><strong>Jane Smith</strong></p>
            <p>Chief Operations Officer</p>
          </div>
          <div className="team-member">
            <img src={image_3} alt="Team Member 3" />
            <p><strong>Michael Johnson</strong></p>
            <p>Head of Education</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
