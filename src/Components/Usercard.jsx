import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../Utils/constant';
import { removeFromFeed } from '../Utils/FeedSlice';

const Usercard = ({user}) => {
const disPatch=useDispatch();

const reviewRequest=async(status,id)=>{
 try {
    await axios.post(BASE_URL+"request/send/"+status+"/"+id,{},{withCredentials:true})
    disPatch(removeFromFeed(id))
 } catch (error) {
  console.log(error)
 }
}

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={user?.photoUrl}
          alt={`${user?.firstName} ${user?.lastName}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${user?.firstName} ${user?.lastName}`}</h2>
        <p>Age: {user?.age}</p>
        <p>Gender: {user?.gender}</p>
        <p>Skills:</p>
        <ul>
          {user?.skills && user?.skills?.map((skill, index) => (
            <li key={user?.index}>{skill}</li>
          ))}
        </ul>
        <p>{user?.about}</p>
        <div className="card-actions justify-end">
          <button className="btn  btn-outline  btn-primary" onClick={()=>reviewRequest("ignore",user?._id)}>Ignore</button>
          <button className="btn  btn-outline  btn-secondary" onClick={()=>reviewRequest("interested",user?._id)}>Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
