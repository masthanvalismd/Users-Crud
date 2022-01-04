import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";


export function UserInfo({ users }) {
  // console.log(users);
  const navigate = useNavigate();

  const { id } = useParams();
  const user = users[id];
  // console.log(user);
  return (
    <div className="user-details">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={user.image}
          alt="Profile"
        />
        <CardContent className="text">
          <h4><span>Name    : </span>{user.name} </h4>
          <h4><span>Userame :  </span>{user.username} </h4>
          <h4><span>Age     : </span>{user.age} </h4>
          <h4><span>Gender  : </span>{user.gender} </h4>
          <h4><span>Email   : </span>{user.email}</h4>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate("/aboutUsers")}>Back</Button>
          <IconButton
                      onClick={() => navigate(`/aboutUsers/edit/${id}`)}
                      color="warning"
                      aria-label="editUsers"
                      title="Edit User"
                    >
                      <EditIcon />
                    </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
