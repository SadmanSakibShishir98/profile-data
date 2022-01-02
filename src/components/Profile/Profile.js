import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "./profile.css";

const Profile = (props) => {
  const profile = props.profile;
  const { name, salary, address, image, email, gender, Phone } = profile;
  // console.log(profile);
  const handleAddProfile = props.handleAddProfile;
  return (
    <div className="profileInfo">
      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <h3> {name}</h3>
        <p>address: {address}</p>

        <p>phone: {Phone}</p>

        <p> email: {email}</p>
        <p>gender: {gender}</p>
        <p>salary: {salary}</p>
        <button
          onClick={() => handleAddProfile(profile)}
          style={{ margin: "20px" }}
        >
          <FontAwesomeIcon icon={faUserFriends} />
          add friend
        </button>
      </div>
    </div>
  );
};

export default Profile;
