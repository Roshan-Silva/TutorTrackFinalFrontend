import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SearchContainer from '../../Components/SearchContainer/SearchContainer'
import TutorsDisplay from '../../Components/TutorsDisplay/TutorsDisplay'
import tutors_of_tutor_track from '../../Assets/Tutors'

const TutorPage = () => {
  const location = useLocation()
  const { city, institute } = location.state || {}
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredTutors = tutors_of_tutor_track.filter(tutor => {
    const query = searchQuery.toLowerCase()
    const matchesSearchQuery = tutor.tutor_name.toLowerCase().includes(query) ||
      tutor.city.some(city => city.toLowerCase().includes(query)) ||
      tutor.institutes.some(institute => institute.toLowerCase().includes(query))
    
    const matchesCityAndInstitute = (!city || tutor.city.includes(city)) && (!institute || tutor.institutes.includes(institute))
    
    return matchesSearchQuery && matchesCityAndInstitute
  })

  return (
    <div>
      <SearchContainer searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TutorsDisplay tutors={filteredTutors} />
    </div>
  )
}

export default TutorPage
