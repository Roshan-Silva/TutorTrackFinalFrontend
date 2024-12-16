import React from 'react';
import './ProfileCard.css';
import placeholderImage from '../../Assets/Images/placeholder.png'; // Add a placeholder image
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {


    const navigate = useNavigate();


  return (
    <div className="profile-card" onClick={(e) => navigate(`/profile/${profile?._id}`)}>

      <img 
        src={profile.profileImage || placeholderImage} 
        alt={`${profile.fullName}'s profile`} 
        className="profileimage" 
      />
      <div className="profile-details">
        <h3>{profile.fullName}</h3>
        <p><strong>Subject:</strong> {profile.teachingSubject}</p>
        <p><strong>Cities:</strong> {profile.teachingCities.join(', ')}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
