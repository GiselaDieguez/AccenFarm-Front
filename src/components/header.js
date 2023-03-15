import React, { useEffect, useState } from 'react'
import "./styles/style.css";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { url } from "../api"
import egg1 from './styles/images/1.gif'
import logo from './styles/images/8.png'
  
export const Header = () => {
  const [totalcash, setCash] = useState();
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${url}/cash/all`)
          .then((response) => response.json())
          .then((res) => {
            setCash(res)
            setLoading(false);
        });
      },[loading]);


  return (
    <>
    {
      loading ? (
        <img src={egg1} className="eggImg" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-30%, -30%)',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0px',
          margin: '50px 0px',
          width: '200px',
          height: 'auto'}}
      />
      ) : (
        <header position="static" >
        <Toolbar>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} className="logo"></img>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cash $ {totalcash[0].totalcash}
          </Typography>
          <Link to="/stadistics">
            <Button color="inherit">stadistics</Button>
          </Link>
        </Toolbar>
      </header>
      )
    } 
    </>
  
  )
}

export default Header