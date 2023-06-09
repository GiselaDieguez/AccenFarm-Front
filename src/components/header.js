import "./styles/style.css";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import egg1 from './styles/images/1.gif'
import logo from './styles/images/8.png'
import gold from './styles/images/11.png'

export const Header = ({totalcash, loading}) => {

  return (
    <>
    {
      loading ? (
        <div className='loadingImg'>
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
      </div>
      ) : (
        <header posiition="statc" >
        <Toolbar>
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} className="logo"></img>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='toolbar'>
            <img src={gold} width="40px"/> {totalcash}
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