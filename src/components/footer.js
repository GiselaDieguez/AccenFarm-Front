import React from "react";
import './styles/style.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import accenLogo from './styles/images/5.png'

export const Footer = () => {
    return (
<footer>
    <div className="footer">
        <a>© 2023 Copyright Gisela Dieguez</a>
        <a href="https://www.accenture.com/ar-es"><img src={accenLogo} className='accenLogo' /></a>
        <br />
        <LocationOnIcon style={{color:"rgb(181 181 181)", verticalAlign:"middle"}} /><a>Rosario, Santa Fe </a>
    </div>
</footer>
    );
};