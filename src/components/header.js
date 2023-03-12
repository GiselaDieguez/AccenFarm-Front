import * as React from "react";
import "./styles/style.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
  
export const Header = () => {
  return (
      <header position="static" >
        <Toolbar>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              Accen Farm
            </Link>
          </Typography>
          <Link to="/stadistics">
            <Button color="inherit">Stadistics</Button>
          </Link>
        </Toolbar>
      </header>
  );
}

export default Header