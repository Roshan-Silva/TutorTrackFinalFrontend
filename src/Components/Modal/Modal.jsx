import React from 'react'
import './Modal.css'
import close_icon from '../../Assets/Icons/close.png'

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={close_icon} alt="Close" onClick={onClose} />
        {children}
      </div>
    </div>
  )
}

export default Modal
