import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './GetOurService.css';

const GetOurService = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleContactUsClick = () => {
    navigate('/contact-us'); // Redirect to the Contact Us page
  };

  return (
    <div className='get-our-service'>
      <div className="bg-dark"></div>
      <h1>YOU CAN GET OUR SERVICE ANYWHERE</h1>
      <button onClick={handleContactUsClick}>Contact Us</button> {/* Attach click event */}
    </div>
  );
};

export default GetOurService;

