import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./mainFooter/MainFooter";
import MainHeader from "./mainHeader/MainHeader";

function MainLayout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: "#39445a",
      }}
    >
      <MainHeader />
      <Stack mt="5vw">
        <Outlet />
        <Box sx={{ flexGrow: 1 }} />
      </Stack>
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
