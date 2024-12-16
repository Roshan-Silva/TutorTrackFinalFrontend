// Profile.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import './ShowingProfile.css';
import { Button } from '@mui/material';
import UpdateProfile from '../UpdateProfile/UpdateProfile';

const ShowingProfile = () => {
    const { userId } = useParams(); // Extracting userId from the URL parameters
    const [profileData, setProfileData] = useState({});



    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:5000/api/profile/${userId}`, {
                    headers: {
                        'x-auth-token': token,
                    },
                });
                setProfileData(response.data);
            } catch (error) {
                console.error('Error fetching profile data', error);
            }
        };

        fetchProfile();
    }, [userId]);

    return (
        <>
            <div className="profile">
                <div className="profile-header">
                    {profileData.profileImage && (
                        <img src={profileData.profileImage} alt="Profile" className="profile-image" />
                    )}
                    {profileData.coverImage && (
                        <img src={profileData.coverImage} alt="Cover" className="cover-image" />
                    )}
                </div>
                <div className="profile-info">
                    <h1>{profileData.fullName}</h1>
                    <p><strong>Username:</strong> {profileData.username}</p>
                    <p><strong>Email:</strong> {profileData.email}</p>
                    <p><strong>Role:</strong> {profileData.role}</p>
                    {profileData.role === 'student' && (
                        <>
                            <p><strong>Subjects:</strong> {profileData.subjects?.join(', ')}</p>
                            <p><strong>Nearest Cities:</strong> {profileData.nearestCities?.join(', ')}</p>
                        </>
                    )}
                    {profileData.role === 'teacher' && (
                        <>
                            <p><strong>Teaching Subject:</strong> {profileData.teachingSubject}</p>
                            <p><strong>Teaching Cities:</strong> {profileData.teachingCities?.join(', ')}</p>
                        </>
                    )}
                </div>
               
            </div>
       
        </>
    );
};

export default ShowingProfile;
