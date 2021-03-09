import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import LoginBtn from "./LoginBtn";

export default function NavBar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="h4" component="h1">
              Context API
            </Typography>
            <LoginBtn />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
