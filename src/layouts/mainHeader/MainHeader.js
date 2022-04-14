import { Button, Typography } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import "./MainHeader.css";

function MainHeader() {
  return (
    <>
      <span onClick={() => window.scroll(0, 0)} className="header">
        <NavLink to="/search">
          <Button sx={{ height: "57px" }} variant="contained">
            Search
          </Button>
        </NavLink>
        <NavLink to="/">
          <Typography sx={{ color: "white", ml: "50px" }}>Home</Typography>
        </NavLink>
        <NavLink to="/trending">
          <Typography sx={{ color: "white", ml: "50px" }}>Trending</Typography>
        </NavLink>
        <NavLink to="/tv">
          <Typography sx={{ color: "white", ml: "50px" }}>TV</Typography>
        </NavLink>
      </span>
    </>
  );
}
export default MainHeader;
