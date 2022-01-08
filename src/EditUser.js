import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";

export function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const user = users[id];
  const [name, setName] = useState(user[0].name);
  const [username, setUsername] = useState(user[0].username);
  const [age, setAge] = useState(user[0].age);
  const [gender, setGender] = useState(user[0].gender);
  const [email, setEmail] = useState(user[0].email);
  const [image, setImage] = useState(user[0].image);
  const navigate = useNavigate();

  const saveEditedValues = () => {
    const usersCopy = [...users];

    let filtered = usersCopy[id];
    filtered[0].name = name;
    filtered[0].username = username;
    filtered[0].age = age;
    filtered[0].gender = gender;
    filtered[0].email = email;
    filtered[0].image = image;

    console.log("after edit", usersCopy);
    setUsers(usersCopy);
    navigate(`/aboutUsers/${id}`);

  };
  const editName = (e) => {
    setName(e.target.value);
    
  };
  const editUserName = (event) => {
    setUsername(event.target.value);
    
  };
  const editAge = (e) => {
    setAge(e.target.value);
   
  };
  const editGender = (e) => {
    setGender(e.target.value);
   
  };
  const editEmail = (e) => {
    setEmail(e.target.value);
   
  };
  const editImage = (e) => {
    setImage(e.target.value);
  
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
            saveEditedValues();
            console.log("books");
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
