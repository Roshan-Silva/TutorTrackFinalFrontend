import React from 'react'
import './Tutors.css'

const Tutors = (props) => {
  return (
    <div className='tutors'>
      <div className="tutors-image-container">
        <div className="cover-image">
          <img src={props.cover_image} alt="Cover" />
        </div>
        <div className="profile-image">
          <img src={props.tutor_image} alt="Profile" />
        </div>
      </div>
      <div className="tutor-name">
        <h2>{props.tutor_name}</h2>
      </div>
      <div className="subject-container">
        <h3>Teaching Subjects:</h3>
        <p>{props.subjects.join(', ')}</p>
      </div>
      <div className="teaching-city-institute">
        <div className="teaching-city">
          <h3>Teaching Cities:</h3>
          {props.city.map((city, index) => (
            <p key={index}>{city}</p>
          ))}
        </div>
        <div className="teaching-institutes">
          <h3>Teaching Institutes:</h3>
          {props.institutes.map((institute, index) => (
            <p key={index}>{institute}</p>
          ))}
        </div>
      </div>
      <div className="tutor-bio">
        <span>{props.tutor_bio}</span>
      </div>
      <div className="contact-button">
        <button>More Details</button>
      </div>
    </div>
  )
}

export default Tutors
