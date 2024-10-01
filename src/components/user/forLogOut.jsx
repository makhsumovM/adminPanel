import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GetToken, RemoveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

const ForLogOut = () => {
const [anchorEl, setAnchorEl] = useState(null);
const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const token = GetToken()
  if(!token){
    return <></>
  }
  const navigate = useNavigate();
  const handleLogOutClick = ()=>{
    RemoveToken();
    navigate('/')
  }

  return (
    <div>
      {" "}
      <IconButton
        size=""
        aria-controls="menu-appbar"
        color="inherit"
        onClick={handleMenu}
      >
        <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogOutClick}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default ForLogOut;
