import React, { useState } from 'react'
import './HomeCityDisplay.css'
import cityData from '../../Assets/City'
import City from '../City/City'
import Modal from '../Modal/Modal'
import { useNavigate } from 'react-router-dom'

const HomeCityDisplay = () => {
  const [selectedCity, setSelectedCity] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleCityClick = (city) => {
    setSelectedCity(city)
    setShowModal(true)
  }

  const handleInstituteClick = (institute) => {
    setShowModal(false)
    navigate('/tutors', { state: { city: selectedCity.city, institute } })
  }

  return (
    <div className='homecity-display'>
      <div className="homecity-display-heading">
        <h1>Where are you?</h1>
        <p>No matter where you are, This is the roadmap for you</p>
      </div>
      <div className="city-display-container">
        {cityData.map((cityItem, index) => (
          <div className="homecity-display-city" key={index} onClick={() => handleCityClick(cityItem)}>
            <City city={cityItem.city} />
          </div>
        ))}
      </div>
      {showModal && selectedCity && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Institutes in {selectedCity.city}</h2>
          <ul>
            {selectedCity.institutes.map((institute, index) => (
              <li key={index} onClick={() => handleInstituteClick(institute)}>{institute}</li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  )
}

export default HomeCityDisplay
