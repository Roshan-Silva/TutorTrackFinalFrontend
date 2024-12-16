import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TutorPage from '../../Pages/TutorPage/TutorPage';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Profile from '../../Pages/Profile/Profile';
import UpdateProfile from '../../Pages/UpdateProfile/UpdateProfile';
import Navbar from '../Navbar/Navbar';
import Homepage from '../../Pages/Homepage/Homepage';
import ShowingProfile from '../../Pages/ShowingProfile/ShowingProfile';

const HomeContainer = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='home' element={<Homepage />} />
        <Route path='tutors' element={<TutorPage />} />
        <Route path='about-us' element={<About />} />
        <Route path='contact-us' element={<Contact />} />
        <Route path='profile' element={<Profile />} />
        <Route path='updateprofile' element={<UpdateProfile />} />
        <Route path='profile/:userId' element={<ShowingProfile />} />
      </Routes>
    </div>
  );
};

export default HomeContainer;
