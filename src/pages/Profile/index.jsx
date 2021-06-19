import React, { useState, useRef } from "react";
import { Container, Card, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import {
  updateDOB,
  updateName,
  updateGender,
  updateEmail,
  updatePassword,
} from "../../services/authService";
import { updateUserData } from "../../redux/actions/userActions";
import PasswordSettings from "./PasswordSettings";
import NameSettings from "./NameSettings";
import DOBSettings from "./DOBSettings";
import EmailSettings from "./EmailSettings";
import GenderSettings from "./GenderSettings";

export default function Profile() {
  const user = useSelector((state) => state.userDetails.user);
  const [date, setStartDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);
  const [passwordSpinner, setPasswordSpinner] = useState(false);
  const [settingsSpinner, setSettingsSpinner] = useState(false);

  const password = useRef();
  const newPassword = useRef();

  const dispatch = useDispatch();

  const handlePassword = (event) => {
    event.preventDefault();
    console.log(password.current.value, newPassword.current.value);

    if (password.current.value && newPassword.current.value) {
      console.log(password.current.value, newPassword.current.value);
      let userDetails = {
        email: user.email,
        password: password.current.value,
        newPassword: newPassword.current.value,
      };
      const updatePasswordSettings = updatePassword(userDetails);
      setPasswordSpinner(true);
      updatePasswordSettings.then((response) => {
        setPasswordSpinner(false);
        if (response.data.error) {
          return setError(response.data.error);
        }
      });
    }
  };

  const handleDate = (date) => {
    setStartDate(date);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    if (email.length) {
      let userDetails = {
        email: user.email,
        newEmail: email,
      };
      const updateEmailSettings = updateEmail(userDetails);
      setSettingsSpinner(true);
      updateEmailSettings.then((response) => {
        setSettingsSpinner(false);
        if (response.data.msg === "SUCCESS") {
          dispatch(updateUserData(response.data.data));
        }
      });
    }
  };

  const handleName = (event) => {
    event.preventDefault();
    if (name.length) {
      let userDetails = {
        email: user.email,
        name: name,
      };
      const updateNameSettings = updateName(userDetails);
      setSettingsSpinner(true);
      updateNameSettings.then((response) => {
        setSettingsSpinner(false);
        if (response.data.msg === "SUCCESS") {
          dispatch(updateUserData(response.data.data));
        }
      });
    }
  };

  const handleDOB = (event) => {
    event.preventDefault();
    if (date) {
      let userDetails = {
        email: user.email,
        dob: date,
      };
      const updateDOBSettings = updateDOB(userDetails);
      setSettingsSpinner(true);
      updateDOBSettings.then((response) => {
        setSettingsSpinner(false);
        if (response.data.msg === "SUCCESS") {
          dispatch(updateUserData(response.data.data));
        }
      });
    }
  };

  const handleGender = (event) => {
    event.preventDefault();
    if (gender.length) {
      let userDetails = {
        email: user.email,
        gender: gender,
      };
      const updateGenderSettings = updateGender(userDetails);
      setSettingsSpinner(true);
      updateGenderSettings.then((response) => {
        setSettingsSpinner(false);
        if (response.data.msg === "SUCCESS") {
          dispatch(updateUserData(response.data.data));
        }
      });
    }
  };

  return (
    <Container>
      <Navigation />
      <Card className="d-flex align-items-center justify-content-center">
        <Card.Body>
          <h2 className="text-center mb-4"> Profile Settings</h2>
          {settingsSpinner ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : null}
          <EmailSettings
            user={user}
            setEmail={setEmail}
            handleEmail={handleEmail}
          />
          <NameSettings user={user} setName={setName} handleName={handleName} />
          <GenderSettings
            user={user}
            setGender={setGender}
            handleGender={handleGender}
          />
          <DOBSettings
            date={date}
            handleDate={handleDate}
            setStartDate={setStartDate}
            handleDOB={handleDOB}
          />
        </Card.Body>
      </Card>
      <PasswordSettings
        passwordSpinner={passwordSpinner}
        error={error}
        handlePassword={handlePassword}
        password={password}
        newPassword={newPassword}
      />
    </Container>
  );
}
