import React, { useState } from 'react';
import './SignUp.css';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        role: 'student', // default role
      });
    
      const { mutate, isError, isPending, error } = useMutation({
        mutationFn: async({username, fullName, email, password, role }) => {
          try {
            console.log('ff ',username,fullName,email,password,role);
            
            const res = await fetch("http://localhost:5000/api/auth/signup", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, fullName, email, password, role }),
              credentials: 'include', // This will include cookies in the reques


            });
            console.log(res);
    
            
            const data = await res.json();
            if(!res.ok) throw new Error(data.error);
            if(data.error) throw new Error(data.error);
            localStorage.setItem('token', data.jwtToken);
            navigate('/');
            window.location.reload();
            return data;
          } catch (error) {
            console.error(error);
            throw error;
          }
        },
        onSuccess: () => {
          toast.success("Account created successfully");
        },
      });
    
      //const navigate = useNavigate(); // Initialize the useNavigate hook
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        mutate(formData);
      };

  return (
    <div className='sign-up'>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form className='signup-form-container' onSubmit={handleSubmit}>
            <div className="signup-input-fields">
                <div className="name-container">
                    <div className="name">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text"
                            name="username"
                            placeholder='Enter here'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="name">
                        <label htmlFor="fullname">Full Name:</label>
                        <input 
                            type="text"
                            name="fullName"
                            placeholder='Enter here'
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="signup-input-fields">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    name="email"
                    placeholder='Enter here'
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
            </div>
            <div className="signup-input-fields">
                <div className="gender-dob">
                    <div className="gender">
                        <label htmlFor="gender">Role:</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="teacher">teacher</option>
                            <option value="student">student</option>
                        </select>
                      
                    </div>
                </div>
            </div>
           
            <div className="signup-input-fields">
                <div className="password-flex">
                <div className="password-confirm">
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    name="password"
                    placeholder='Enter here'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>
                </div>
            </div>
            <div className="button-create-account">
                <button>Create Account</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
