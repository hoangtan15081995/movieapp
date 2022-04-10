import { TextField, Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import "./MainHeader.css";

function MainHeader() {
  return (
    <>
      <span className="header">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            ml: "50px",
          }}
        >
          <TextField
            className="textField"
            fullWidth
            label="Search movie"
            id="fullWidth"
          />
        </Box>
        <Button sx={{ height: "57px" }} variant="contained">
          Search
        </Button>
        <NavLink to="/">
          <Typography sx={{ color: "white", ml: "50px" }}>Home</Typography>
        </NavLink>
        <NavLink to="/trending">
          <Typography sx={{ color: "white", ml: "50px" }}>Trending</Typography>
        </NavLink>
      </span>
    </>
  );
}
export default MainHeader;
