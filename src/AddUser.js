import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function AddUser({ users, setUsers }) {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  return (
    <div className="textField-add">
      <TextField
        label="Enter a Name"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br/>
      <TextField
        label="Enter Username"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br/>
      
      <TextField
        label="Enter Age"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br/>
      
      <TextField
        label="Enter Gender"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <br/>
      
      <TextField
        label="Enter email"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      /><br/>
      <TextField
        label="Enter Image URL"
        variant="standard"
        style={{ width: "15%", margin: "0px 8px", paddingLeft: "5px" }}
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <br/>
      <br/>
      
      <div className="btn">
        <Button 
      style={{
        backgroundColor: "crimson",
        color: "#FFFFFF",
        marginRight: "40px",
      }}
          onClick={() => navigate("/users")}>Back</Button>
        <Button
          variant="outlined"
          style={{ backgroundColor: "blue", color: "#FFFFFF" ,marginLeft: "20px"}}
          onClick={() => {
            const newUser = {
              id: users.length,
              name,
              username,
              age,
              gender,
              email,
              image
            };
            // console.log(newUser);
            setUsers([...users, newUser]);
            setName("");
            navigate("/users");
          }}
        >
          Add User
        </Button>

      </div>
    </div>
  );
}
