import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { Home } from "./Home";
import { useState } from "react";
import { UserDetails } from "./UserDetails";
import { AddUser } from "./AddUser";
import { UserProfiles } from "./UserProfile";
import { EditUser } from "./EditUser";
import { EditProfile } from "./EditProfile";
import "./App.css";

export default function App() {
 
  const usersList = [
    {
      id: 0,
      name: "SMD",
      username: "smd@123",
      age: 23,
      gender: "Male",
      email: "smd@gmail.com",
      image:
        "https://1.bp.blogspot.com/-0ZUMPsBahSo/X0vuBttwtWI/AAAAAAAAdwM/_0Nuxi-PWUsgTsLdAmGZqILPiJf7N2bdACLcBGAsYHQ/s1600/best%2Bdp%2Bfor%2Bwhatsapp%2B%25281%2529.jpg",
    },
    {
      id: 1,
      name: "Vali",
      username: "lucky_vali",
      age: 29,
      gender: "Male",
      email: "vali@gmail.com",
      image:
        "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
    },
    {
      id: 2,
      name: "John",
      username: "cool_john",
      age: 25,
      gender: "Male",
      email: "john1098@gmail.com",
      image:
        "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
    },
    {
      id: 3,
      name: "Lucy",
      username: "lucy_angel",
      age: 19,
      gender: "Female",
      email: "lucy@gmail.com",
      image:
        "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701872/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profi.jpg?ver=6",
    },
    {
      id: 4,
      name: "Adam",
      username: "adam",
      age: 43,
      gender: "Male",
      email: "adam@gmail.com",
      image:
        "https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg",
    },
    {
      id: 5,
      name: "Regina",
      username: "regina@143",
      age: 32,
      gender: "Female",
      email: "regina@gmail.com",
      image:
        "https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=20&m=1154642632&s=612x612&w=0&h=dQPjQCt_WOKhD0ysSJG6gIsu7xW65vH8Wf_SaqetIqY=",
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
                navigate("/users");
              }}
            >
              Users
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/create-user");
              }}
            >
              Add Users
            </Button>
            
           
          </Toolbar>
        </AppBar>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          path="/users"
          element={<UserDetails users={users} setUsers={setUsers} />}
        />
        
        <Route
          path="/edit-user/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
        <Route
          path="/create-user"
          element={<AddUser users={users} setUsers={setUsers} />}
        />
        <Route path="/profile/:id" element={<UserProfiles users={users} />} />
        <Route
          path="/edit-profile/:id"
          element={<EditProfile users={users} setUsers={setUsers} />}
        />
       
      </Routes>
    </div>
  );
}
