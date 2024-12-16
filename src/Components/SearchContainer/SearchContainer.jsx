import React, { useState } from 'react';
import './SearchContainer.css';
import search_icon from '../../Assets/Icons/search.png';
import axios from 'axios';
import ProfileCard from '../profilecard/profileCard';


const SearchContainer = ({ searchQuery, setSearchQuery }) => {

  const [filter, setFilter] = useState(''); 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleSearch = async (event) => {
    event.preventDefault();
    let endpoint = '';

    if (filter === 'teacher') {
      endpoint = `http://localhost:5000/api/search/teacher/${searchTerm}`;
    } else if (filter === 'subject') {
      endpoint = `http://localhost:5000/api/search/subject/${searchTerm}`;
    } else if (filter === 'city') {
      endpoint = `http://localhost:5000/api/search/city/${searchTerm}`;
    }

    if (endpoint) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(endpoint, {
          headers: {
            'x-auth-token': token,
          },
        });
        console.log(response);
        setSearchResults(response.data); // Set search results state with fetched data
      } catch (error) {
        console.error('Error fetching profile data', error);
      }
    }
  }

  return (
    <div className='search'>
      <div className="search-container">
        <input 
          type="text" 
          placeholder='Search for teachers, city or subjects' 
          value={searchQuery}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img onClick={handleSearch} src={search_icon} alt="Search Icon" />

        <div className="radio-buttons">
          <label>
            <input 
              type="radio" 
              value="teacher" 
              checked={filter === 'teacher'} 
              onChange={(e) => setFilter(e.target.value)} 
            />
            Teacher
          </label>
          <label>
            <input 
              type="radio" 
              value="city" 
              checked={filter === 'city'} 
              onChange={(e) => setFilter(e.target.value)} 
            />
            City
          </label>
          <label>
            <input 
              type="radio" 
              value="subject" 
              checked={filter === 'subject'} 
              onChange={(e) => setFilter(e.target.value)} 
            />
            Subject
          </label>
        </div>
      </div>
      <div className='search-results'>
        {searchResults.length > 0 ? (
          searchResults.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SearchContainer;
