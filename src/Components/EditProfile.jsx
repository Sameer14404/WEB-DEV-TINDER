import React, { useState } from 'react';
import Usercard from './Usercard';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../Utils/constant';
import { addUser } from '../Utils/UserSlice';

const EditProfile = () => {
    const user=useSelector((store)=>store.User);
   
    const dispatch=useDispatch()
    const [showToast,setShowToast]=useState(false)
  const [formData, setFormData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    age:user?.age,
    photoUrl: user?.photoUrl,
    gender: user?.gender,
    about: user?.about
  });
  
 const {firstName,lastName,age,photoUrl,gender,about}=formData
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
       const res= await axios.patch(BASE_URL+"profile/edit",{firstName,lastName,age,photoUrl,gender,about},{withCredentials:true})
       
        dispatch(addUser(res.data.data))
          res.data.data
        setShowToast(true)
        setTimeout(()=>{
            setShowToast(false)
        },3000)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="flex  items-center min-h-screen bg-base-200  justify-around gap-5 ">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl   p-10 m-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Edit Profile</h2>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">age</span>
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

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="select select-bordered select-secondary w-full"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">others</option>
            </select>
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
      </div>
      <Usercard user={{firstName,lastName,photoUrl,gender,about,age}}/>
    </div>
  );
};

export default EditProfile;
