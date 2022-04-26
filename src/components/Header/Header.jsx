import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  CssBaseline,
} from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PhoneBook
          </Typography>
          <div>
            <Button color="inherit" href="/contacts">
              Contact List
            </Button>
          </div>
          <Button color="inherit" href="/contacts/add">
            Add Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
