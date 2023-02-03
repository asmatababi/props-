import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
      {props.children}
    
      <h1>My Name is {props.myName} </h1>
      <h3>
        {" "}
        I am {props.aboutMe} and {props.myProfession}{" "}
      </h3>
      <button onClick={props.handleName}> I am</button>
    </div>
  );
};
//set default pops
Profile.defaultProps = {
  myName: "-Please enter your name-",
  aboutMe: "-Please enter your bio-",
  myProfession: "-Please enter your profession-",
};

//add type-check to props
Profile.propTypes = {
  myName: PropTypes.string,
  aboutMe: PropTypes.string,
  myProfession: PropTypes.string,
};

export default Profile;
