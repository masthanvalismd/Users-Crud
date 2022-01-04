import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";

export function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const user = users[id];
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);
  const navigate = useNavigate();

  const editName = (e) => {
    setName(e.target.value);
    const updated_name = name;
    user.name = updated_name;
  };
  const editUserName = (event) => {
    setUsername(event.target.value);
    const updated_username = username;
    user.username = updated_username;
  };
  const editAge = (e) => {
    setAge(e.target.value);
    const updated_age = age;
    user.age = updated_age;
  };
  const editGender = (e) => {
    setGender(e.target.value);
    const updated_gender = gender;
    user.gender = updated_gender;
  };
  const editEmail = (e) => {
    setEmail(e.target.value);
    const updated_email = email;
    user.email = updated_email;
  };
  const editImage = (e) => {
    setImage(e.target.value);
    const updated_image = image;
    user.image = updated_image;
  };
  return (
    <div className="textField-edit">
      <h2 className="textField-h2">Form to Edit the User Details</h2>
      <TextField
        label="Enter a Name"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={editName}
      />
      <br />
      <TextField
        label="Enter Username"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={username}
        onChange={editUserName}
      />
      <br />

      <TextField
        label="Enter Age"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={age}
        onChange={editAge}
      />
      <br />

      <TextField
        label="Enter Gender"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={gender}
        onChange={editGender}
      />
      <br />

      <TextField
        label="Enter email"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={email}
        onChange={editEmail}
      />
      <br />
      <TextField
        label="Enter Image URL"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={image}
        onChange={editImage}
      />
      <br />
      <br />

      <div className="edit-btn">
        <Button
          style={{
            backgroundColor: "crimson",
            color: "#FFFFFF",
            marginRight: "20px",
          }}
          onClick={() => navigate(`/aboutUsers/${id}`)}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: "green",
            color: "#FFFFFF",
            marginLeft: "20px",
          }}
          onClick={(event) => {
            event.preventDefault();
            setUsers([...users]);
            setName("");
            navigate(`/aboutUsers/${id}`);
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
