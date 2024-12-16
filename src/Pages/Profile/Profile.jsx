// Profile.jsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import './Profile.css';
import { Button } from '@mui/material';
import UpdateProfile from '../UpdateProfile/UpdateProfile';

const Profile = () => {
    const [profileData, setProfileData] = useState({});
    const [open, setOpen] = useState(false);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    
    //model style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:"56vw",
        height: 500,
        
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: "12px",
        p: 4,
        
      };

      // Image modal style
    const imageModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'rgba(0, 0, 0, 0.8)',
        boxShadow: 24,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '90vw',
        maxHeight: '90vh',
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/profile/profile', {
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
    }, []);

    // Function to open image modal with selected image
    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setImageModalOpen(true);
    };

    // Function to close image modal
    const closeImageModal = () => setImageModalOpen(false);

    return (
        <>
        <div className="profile">
            <div className="profile-header">
                    {profileData.profileImage && (
                        <img 
                            src={profileData.profileImage} 
                            alt="Profile" 
                            className="profile-image" 
                            onClick={() => openImageModal(profileData.profileImage)} // Click to open full-screen modal
                        />
                    )}
                    {profileData.coverImage && (
                        <img 
                            src={profileData.coverImage} 
                            alt="Cover" 
                            className="cover-image" 
                            onClick={() => openImageModal(profileData.coverImage)} // Click to open full-screen modal
                        />
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
            <div className="button-edit">
                <button onClick={handleOpen}>Edit Profile</button>
            </div>
            
        </div>
        {/* Profile Edit Modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="child-modal-title" aria-describedby="child-modal-description">
                <Box sx={style}>
                    <div className='pupdate'>
                        <UpdateProfile/>
                    </div>
                    <div className='cancelButton'>
                        <Button onClick={handleClose}>Cancel</Button>
                    </div>
                </Box>
            </Modal>

            {/* Image Modal for Full-Screen View */}
            <Modal open={imageModalOpen} onClose={closeImageModal}>
                <Box sx={imageModalStyle}>
                    <img src={selectedImage} alt="Full Screen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
            </Modal>
        </>
    );
};

export default Profile;
