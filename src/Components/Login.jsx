import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Utils/constant";

const Login = () => {
  const [email, setEmail] = useState("alexjohnson@example.com");
  const [password, setPassword] = useState("Alex@123");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleClick = async () => {
    try {
      const response = await axios.post(BASE_URL+"login", {
        emailId: email,
        password: password, 
      },{withCredentials:true});
      dispatch(addUser(response.data))
      navigate("/feed")
      
    } catch (error) {
      console.log(error.response?.data || error.message); 
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 ">
      <div className="card w-[28rem] bg-base-100 shadow-xl  p-6 rounded-lg">
        <div className="card-body">
          <h2 className="card-title text-center text-2xl font-bold mb-2">Login</h2>

          {/* Email Field */}
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-lg font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text text-lg font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-full  text-lg font-semibold" onClick={handleClick}>
              Login
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="#" className="text-primary hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
