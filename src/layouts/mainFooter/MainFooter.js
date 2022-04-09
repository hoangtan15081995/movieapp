import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./MainFooter.css";

function MainFooter() {
  return (
    <Stack spacing={2} className="footer">
      <Pagination count={10} />
    </Stack>
  );
}

export default MainFooter;
