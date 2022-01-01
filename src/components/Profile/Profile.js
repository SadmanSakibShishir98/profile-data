import React from "react";

const Profile = (props) => {
  const profile = props.profile;
  const { name, salary, address, image, email, gender, id, phone } = profile;
  return (
    <div style={{ border: "1px solid red", margin: "20px" }}>
      <img
        style={{
          border: "1px solid goldenrod",
          margin: "20px",
          width: "100px",
        }}
        src={image}
        alt=""
      />
      <h3> {name}</h3>
      <h4>address: {address}</h4>
      <h4>id: {id}</h4>
      <h4>phone: {phone}</h4>
      <h4> salary: {salary}</h4>
      <h4> email: {email}</h4>
      <h4>gender: {gender}</h4>
      <h4>salary: {salary}</h4>
      <button style={{ margin: "20px" }}>add friend</button>
    </div>
  );
};

export default Profile;
