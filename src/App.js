import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { Home } from "./Home";
import { useState } from "react";
import { UserDetails } from "./UserDetails.1";
import { AddUser } from "./AddUser";
import { UserInfo } from "./UserInfo";
import { EditUser } from "./EditUser";
import "./App.css";

export default function App() {
  const usersList = [
    {
      id: 1,
      name: "SMD",
      username: "smd@123",
      age: 23,
      gender: "Male",
      email: "smd@gmail.com",
      image:
        "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
    },
    {
      id: 2,
      name: "VALI",
      username: "vali123",
      age: 22,
      gender: "Male",
      email: "vali@gmail.com",
      image:
        "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
    },
    {
      id: 3,
      name: "SMD",
      username: "smd@123",
      age: 23,
      gender: "Male",
      email: "smd@gmail.com",
      image:
        "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
    },
    {
      id: 4,
      name: "VALI",
      username: "vali123",
      age: 22,
      gender: "Male",
      email: "vali@gmail.com",
      image:
        "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
    },
    {
      id: 5,
      name: "SMD",
      username: "smd@123",
      age: 23,
      gender: "Male",
      email: "smd@gmail.com",
      image:
        "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
    },
    {
      id: 6,
      name: "VALI",
      username: "vali123",
      age: 22,
      gender: "Male",
      email: "vali@gmail.com",
      image:
        "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
    },
  ];
  const [users, setUsers] = useState(usersList);
  const navigate = useNavigate();
  // const
  return (
    <div className="App">
      <div className="header">
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/aboutUsers");
              }}
            >
              Users
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/addUsers");
              }}
            >
              Add Users
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/userprofiles");
              }}
            >
              Profiles
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          path="/aboutUsers"
          element={<UserDetails users={users} setUsers={setUsers} />}
        />
        <Route path="/aboutUsers/:id" element={<UserInfo users={users} />} />
        <Route
          path="/aboutUsers/edit/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
        <Route
          path="/addUsers"
          element={<AddUser users={users} setUsers={setUsers} />}
        />
        <Route
          path="/userprofiles"
          element={<AddUser users={users} setUsers={setUsers} />}
        />
      </Routes>
    </div>
  );
}
