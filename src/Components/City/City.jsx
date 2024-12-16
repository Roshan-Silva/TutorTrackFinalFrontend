import React from 'react'
import './City.css'
import city_icon from '../../Assets/Icons/city-image.png'
const City = (props) => {
  return (
    <div className='city'>
    <img src={city_icon} alt="" />
    <h2>{props.city}</h2>
    </div>
  )
}

export default City
