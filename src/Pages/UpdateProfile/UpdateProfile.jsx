import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UpdateProfile.css';

const UpdateProfile = () => {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        role: '',
        subjects: '',
        teachingSubject: '',
        teachingCities: '',
        nearestCities: '',
        password: '',
        profileImage: null,
        coverImage: null,
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the current user's profile data
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/profile/profile', {
                    headers: {
                        'x-auth-token': token,
                    },
                });
                setFormData({
                    username: response.data.username || '',
                    fullName: response.data.fullName || '',
                    email: response.data.email || '',
                    role: response.data.role || '',
                    subjects: response.data.subjects ? response.data.subjects.join(', ') : '',
                    teachingSubject: response.data.teachingSubject || '',
                    teachingCities: response.data.teachingCities ? response.data.teachingCities.join(', ') : '',
                    nearestCities: response.data.nearestCities ? response.data.nearestCities.join(', ') : '',
                    profileImage: response.data.profileImage || null,
                    coverImage: response.data.coverImage || null,
                });
            } catch (error) {
                console.error('Error fetching profile data', error);
            }
        };

        fetchProfileData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            console.log("tk ",token);
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token,
                },
            };

            console.log("data ",formData)
            const formDataObj = new FormData();
            for (const key in formData) {
                if (formData[key]) {
                    formDataObj.append(key, formData[key]);
                }
            }
            console.log("formdata ",formDataObj)
            const response = await axios.put('http://localhost:5000/api/profile/update', formDataObj,config);
            console.log(response.data);
            navigate('/profile');
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <div className='update-profile'>
            <div className="update-pr">
                <h1>Update Profile</h1>
                <form className='form-con' onSubmit={handleSubmit}>
                    <div className="input-fields">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder='Enter your username here'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder='Enter your full name here'
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email here'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter your new password here'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="profileImage">Profile Image:</label>
                        <input
                            type="file"
                            name="profileImage"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="input-fields">
                        <label htmlFor="coverImage">Cover Image:</label>
                        <input
                            type="file"
                            name="coverImage"
                            onChange={handleFileChange}
                        />
                    </div>
                    {formData.role === 'student' && (
                        <>
                            <div className="input-fields">
                                <label htmlFor="subjects">Subjects:</label>
                                <input
                                    type="text"
                                    name="subjects"
                                    placeholder='Enter your subjects here (comma-separated)'
                                    value={formData.subjects}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-fields">
                                <label htmlFor="nearestCities">Nearest Cities:</label>
                                <input
                                    type="text"
                                    name="nearestCities"
                                    placeholder='Enter your nearest cities here (comma-separated)'
                                    value={formData.nearestCities}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}
                    {formData.role === 'teacher' && (
                        <>
                            <div className="input-fields">
                                <label htmlFor="teachingSubject">Teaching Subject:</label>
                                <input
                                    type="text"
                                    name="teachingSubject"
                                    placeholder='Enter your teaching subject here'
                                    value={formData.teachingSubject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-fields">
                                <label htmlFor="teachingCities">Teaching Cities:</label>
                                <input
                                    type="text"
                                    name="teachingCities"
                                    placeholder='Enter your teaching cities here (comma-separated)'
                                    value={formData.teachingCities}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}
                    <div className="update-button">
                        <button type="submit">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;
