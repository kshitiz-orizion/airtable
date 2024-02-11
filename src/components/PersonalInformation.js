import React from "react";
import Profile from "../assets/profile.png";

const PersonalInformation = () => {
  return (
    <div className="personalContainer">
      <div className="personalInfo">
        <h1>Personal Information</h1>
        <div className="formConatiner">
        <form action="/action_page.php">
          <div className="formSection">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
            />

            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
            />
          </div>
          <div className="formSection">
            <input type="text" id="fname" name="firstname" placeholder="City" />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Postal code"
            />
          </div>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Adress"
            className="address"
          />
          <div className="formSection">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Email"
            />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="+868126879"
            />
          </div>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Password"
            className="password"
          />
          <p>
            Use this email to log in to your <a href="">resumedone.io</a>{" "}
            account and receive notifications.
          </p>
          <input type="submit" value="Save" />
          <div>
            <input type="checkbox" />
            <label for="vehicle1">
              {" "}
              Show my profile to serious employers on hirethesbest.io for free
            </label>
          </div>
        </form>
        <div className="profilePic">
          <img src={Profile} />
        </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
