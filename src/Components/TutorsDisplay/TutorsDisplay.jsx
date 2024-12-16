import React from 'react'
import Tutors from '../Tutors/Tutors'


const TutorsDisplay = ({ tutors }) => {
  return (
    <div className='tutors-display'>
      <div className="tutors-display-list">
        {tutors.map((tutor, index) => (
          <div className="tutors-display-list-format" key={index}>
            <Tutors 
              tutor_name={tutor.tutor_name}
              cover_image={tutor.cover_image}
              tutor_image={tutor.tutor_image}
              subjects={tutor.subjects}
              city={tutor.city}
              institutes={tutor.institutes}
              tutor_bio={tutor.tutor_bio}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TutorsDisplay
