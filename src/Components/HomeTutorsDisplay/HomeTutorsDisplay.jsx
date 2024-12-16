import React from 'react'
import './HomeTutorsDisplay.css'
import tutor_homepage from '../../Assets/TutorHome'
import { Link } from 'react-router-dom'
import Tutors from '../Tutors/Tutors'
const HomeTutorsDisplay = () => {
  return (
    <div className='tutors-display'>
      <div className="tutors-display-heading">
        <h1>Our Tutors</h1>
        <p>Experienced, Qualified, Diverse, Supportive, Inspiring, Dedicated</p>
      </div>
      <div className="tutors-display-list">
        {
            tutor_homepage.map((tutor,index)=>{
                return (
                    <div className="tutors-display-list-format">
                        <Tutors 
                        key={index}
                        tutor_name = {tutor.tutor_name}
                        cover_image = {tutor.cover_image}
                        tutor_image = {tutor.tutor_image}
                        subjects = {tutor.subjects}
                        city = {tutor.city}
                        institutes = {tutor.institutes}
                        tutor_bio = {tutor.tutor_bio}
                        />
                    </div>
                )
            })
        }
      </div>
      <div className="show-more">
        <Link to="/tutors" style={{ textDecoration: 'none' }}  ><button>show more tutors</button></Link>
      </div>
    </div>
  )
}

export default HomeTutorsDisplay
