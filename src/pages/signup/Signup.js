import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../reduxToolKIt/store/slices/authSlice'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [formData,setFormdata]=useState({ email: '', password: '', userName: '', confirmPassword: '' })
    const handleSubmit=async(e)=>{
         e.preventDefault();
        try {
            console.log('Signing up with:', formData);
            if (formData.password !== formData.confirmPassword) {
                alert("Password and Confirm Password do not match");
                return;
            }
            if(formData.password.length < 6) {
                alert("Password should be at least 6 characters long");
                return;
            }
            if (!formData.email.includes('@')) {
                alert("Please enter a valid email address");
                return;
            }
            if (formData.userName.length < 3) {
                alert("Username should be at least 3 characters long");
                return;
            }
            if (formData.userName.length > 15) {
                alert("Username should not exceed 15 characters");
                return;
            }

            await dispatch(signup(formData))
            navigate('/')
           
        } catch (error) {
            console.log(error.message);

        }



    }
    const handleChange=(e)=>{
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }
  return (
    <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <div>
                    <label>Confrim Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
  )
}
