import React, { useCallback, useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";
import InputField from "../Common/InputField/InputField";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { putUser } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";

const missingMessage = "שדה חובה";

const UserProfileEdit = () => {
  const userState = useUserState();
  const userDispatch = useUserDispatch();
  const [userDetails, setUserDetails] = useState(userState.user);
  const [warnings, setWarnings] = useState({});
  console.log("userState", userState, "warnings", warnings);

  const setExpertDetails = useCallback(
    (expertDetails) => setUserDetails({ ...userDetails, expertDetails }),
    [userDetails, setUserDetails]
  );

  const requiredFields = {
    city: true,
    lastName: true,
    firstName: true,
    phone: true,
  };

  const setUserDetailsWithWarning = useCallback(
    (e, value) => {
      if (requiredFields[e.target.id]) {
        if (e.target.value === null || e.target.value === "") {
          warnings[e.target.id] = missingMessage;
        } else {
          delete warnings[e.target.id];
        }
        setWarnings(warnings);
      }
      setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
    },
    [warnings, userDetails]
  );

  const submit = useCallback(() => {
    const requiredFieldsKeys = Object.keys(requiredFields);
    const fieldsWithWarnings = requiredFieldsKeys.filter(
      (field) => !(userDetails[field] && userDetails[field] !== "")
    );
    fieldsWithWarnings.forEach((field) => (warnings[field] = missingMessage));
    if (fieldsWithWarnings.length > 0) {
      console.log("has warnings", warnings);
      setWarnings(warnings);
      return;
    }
    console.log("submit", userDetails);
    putUser(userDispatch, {
      ...userDetails,
      profileFullFields: true,
    });
  }, [userDetails, warnings, setWarnings, requiredFields, userDispatch]);

  console.log(userDetails);

  return (
    <div className="profile-edit-container">
      <div style={{ alignSelf: "flex-start" }}>
        <PreviousButton linkTo="/more-menu" />
      </div>
      <div className="profile-details">
        <Avatar />
        {(userDetails.firstName === undefined ||
          userDetails.lastName === undefined ||
          userDetails.firstName === "" ||
          userDetails.lastName === "") && (
          <h4 className="user-name"> הכנסת פרטי משתמש</h4>
        )}
        {userDetails.firstName !== undefined &&
          userDetails.lastName !== undefined &&
          userDetails.firstName !== "" &&
          userDetails.lastName !== "" && (
            <h4 className="user-name">
              {userDetails.firstName} {userDetails.lastName}
            </h4>
          )}
        <h6 className="user-city">{userDetails.city} </h6>
      </div>
      <div className="input-fields">
        <InputField
          value={userDetails.firstName || ""}
          id="firstName"
          required={true}
          label="שם פרטי:"
          warning={warnings.firstName}
          onChange={setUserDetailsWithWarning}
        />
        <InputField
          value={userDetails.lastName}
          id="lastName"
          required={true}
          label="שם משפחה:"
          warning={warnings.lastName}
          onChange={setUserDetailsWithWarning}
        />
        <InputField
          max={10}
          value={userDetails.profession}
          id="profession"
          label="מה המקצוע שלך?"
          onChange={setUserDetailsWithWarning}
        />

        <InputField
          value={userDetails.phone}
          id="phone"
          required={true}
          label="טלפון"
          warning={warnings.phone}
          onChange={setUserDetailsWithWarning}
        />
        <InputField
          value={userDetails.city}
          id="city"
          required={true}
          label="ישוב"
          warning={warnings.city}
          onChange={setUserDetailsWithWarning}
        />
        <div className="mentor-switch">
          <label className="switch">
            <input
              type="checkbox"
              value={userDetails.isExpert}
              onChange={setUserDetailsWithWarning}
            />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {userDetails.isExpert && (
          <ExpertProfileEdit
            setExpertDetails={setExpertDetails}
            expertDetails={userDetails.expertDetails}
          />
        )}
        {/* <button className="save-button">שמירה</button> */}
        <Button className="save-button" id="submitButton" onClick={submit}>
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.21875 7.8125L11.3125 0.71875L12.2188 1.65625L4.21875 9.65625L0.5 5.9375L1.4375 5L4.21875 7.8125Z"
              fill="white"
            />
          </svg>
          שמירה
        </Button>
      </div>
    </div>
  );
};
export default UserProfileEdit;
