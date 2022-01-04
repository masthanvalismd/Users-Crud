import * as React from "react";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function UserDetails({ users, setUsers }) {
  const navigate = useNavigate();

  const deleteuser = (id) => setUsers(users.filter((user) => user.id !== id));
  return (
    <div className="table-data">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(({ id, name, username }, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{username}</TableCell>
                  <div className="row-actions">
                    <TableCell>
                      <IconButton
                        onClick={() => navigate(`/aboutUsers/${id}`)}
                        color="primary"
                        aria-label="aboutUsers"
                        title="User Info"
                      >
                        <InfoIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell>
                      {" "}
                      <IconButton
                        onClick={() => deleteuser(id)}
                        color="error"
                        aria-label="deleteUser"
                        title="Delete User"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </div>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
