import React from 'react'
import './InstitutesPopup.css'

const InstitutesPopup = ({ city, institutes, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Institutes in {city}</h2>
        <ul>
          {institutes.map((institute, index) => (
            <li key={index}>{institute}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default InstitutesPopup
