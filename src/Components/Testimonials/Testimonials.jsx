import React from 'react'
import './Testimonials.css'
import user1 from '../../Assets/Testimonials/user1.jpg'
import user2 from '../../Assets/Testimonials/user2.jpg'
import user3 from '../../Assets/Testimonials/user3.jpg'
const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="testimonials-heading">
        <h1>Testimonials</h1>
        <p>Take look what are they saying about us</p>
      </div>
      <div className="testimonials-containers">
        <div className="testimonials-container">
          <div className="testimonials-top">
            <div className="testimonials-top-left">
              <img src={user1} alt="" />
            </div>
            <div className="testimonials-top-right">
              <h3>John Willams</h3>
              <span>Chicago, USA</span>
            </div>
          </div>
          <div className="testimonials-bottom">
            <p>As a college student juggling a busy schedule, finding quality study resources can be tough. Tutor Track has been a lifesaver! The model papers and past papers are a goldmine for exam preparation. They give me a clear idea of what to expect on the test and help me focus my studying.</p>
          </div>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-top">
            <div className="testimonials-top-left">
              <img src={user2} alt="" />
            </div>
            <div className="testimonials-top-right">
              <h3>Pat Cummins</h3>
              <span>Sydney, Australia</span>
            </div>
          </div>
          <div className="testimonials-bottom">
            <p>As a college student juggling a busy schedule, finding quality study resources can be tough. Tutor Track has been a lifesaver! The model papers and past papers are a goldmine for exam preparation. They give me a clear idea of what to expect on the test and help me focus my studying.</p>
          </div>
        </div>
        <div className="testimonials-container">
          <div className="testimonials-top">
            <div className="testimonials-top-left">
              <img src={user3} alt="" />
            </div>
            <div className="testimonials-top-right">
              <h3>Ben Stokes</h3>
              <span>London, England</span>
            </div>
          </div>
          <div className="testimonials-bottom">
            <p>As a college student juggling a busy schedule, finding quality study resources can be tough. Tutor Track has been a lifesaver! The model papers and past papers are a goldmine for exam preparation. They give me a clear idea of what to expect on the test and help me focus my studying.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
