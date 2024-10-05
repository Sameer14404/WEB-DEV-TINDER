import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../Utils/constant';
import { addUser } from '../Utils/UserSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        age: '',
        gender: '',
        photoUrl: '',
        skills: '',
        about: ''
    });
  
    const { firstName, lastName, emailId, password, age, gender, photoUrl, skills, about } = formData;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(BASE_URL + "signup", { firstName, lastName, emailId, password, age, gender, photoUrl, skills, about }, { withCredentials: true });
            console.log(res)
            dispatch(addUser(res?.data.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center min-h-screen bg-base-200 justify-around gap-5">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl p-10 m-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter your last name"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="emailId"
                            value={formData.emailId}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* Password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* Age */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* Gender */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="select select-bordered select-primary w-full"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    {/* Photo URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photoUrl"
                            value={formData.photoUrl}
                            onChange={handleChange}
                            placeholder="Enter your photo URL"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* Skills */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Skills</span>
                        </label>
                        <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            placeholder="Enter your skills (comma-separated)"
                            className="input input-bordered input-primary w-full"
                        />
                    </div>

                    {/* About Section */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">About</span>
                        </label>
                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            placeholder="Tell us about yourself"
                            className="textarea textarea-bordered textarea-primary w-full"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-secondary w-full">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            {showToast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-success">
                        <span>Signup successful.</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
