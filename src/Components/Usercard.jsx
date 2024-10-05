import React from 'react';

const Usercard = ({user}) => {
//   const firstName = "Sameer";
//   const lastName = "Dangi";
//   const age = 22;
//   const gender = "Male";
//   const skills = []
//   const photoUrl = "https://avatars.githubusercontent.com/u/7790161?v=4";
const {firstName,lastName,age,gender,skills,photoUrl,about}=user

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        {/* <p>Skills:</p>
        <ul>
          {skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul> */}
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
