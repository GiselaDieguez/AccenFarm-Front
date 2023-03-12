import * as React from "react";
import "./styles/style.css";
import { Header } from "./header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import chicken from "./styles/images/3.jpg"
import egg from "./styles/images/4.jpg"
import { url } from "../api"
import { Footer } from "./footer";
  
export const Home = () => {

    
    fetch(`${url}/chickens/allChickens`)
    .then((response) => response.json())
    .then((res) => console.log(res));
  return (
    <>
    <Header />
    <div className="farmBody">
        <div className="farmCards">
        <Card sx={{ maxWidth: 200 }} className="chickenCard">
            <CardMedia
                sx={{ height: 140 }}
                image={chicken}
                title="Chicken" />
            <CardActions>
                <p>Breve descripcion</p>
                <p>0/10</p>
            </CardActions>
            <CardActions className="mainPriceCard">
                <div className="priceCard">
                    <h4>$2000</h4>
                    <Button size="small">Buy</Button>
                </div>
                <div className="priceCard">
                    <h4>$2000</h4>
                    <Button size="small">Sell</Button>
                </div>
            </CardActions>
        </Card>
        <Card sx={{ maxWidth: 200 }} className="eggCard">
            <CardMedia
                sx={{ height: 140 }}
                image={egg}
                title="Egg" />
            <CardActions>
                <p>Breve descripcion</p>
                <p>0/10</p>
            </CardActions>
            <CardActions className="mainPriceCard">
            <div className="priceCard">
                    <h4>$2000</h4>
                    <Button size="small">Buy</Button>
                </div>
                <div className="priceCard">
                    <h4>$2000</h4>
                    <Button size="small">Sell</Button>
                </div>
            </CardActions>
        </Card>
        </div>
    </div>  
    <Footer/>
    </>
  );
}