import React, { useEffect, useState } from 'react'
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
import egg1 from './styles/images/1.gif'
  
export const Home = () => {
    
    const [amount, setAmount] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${url}/products/productsamt`)
          .then((response) => response.json())
          .then((res) => {
            setAmount(res)
            setLoading(false);
        });
      },[loading]);

    console.log({amount});

    const handleBuy = () => {
        fetch(`${url}/chickens/chicken`, {method: 'POST'})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }

    const handleSell = () => {
        console.log("Se vendió");
    }

  return (
    <>
    {
        loading ? 
        (
            <img src={egg1} class="eggImg" style={{
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
            <>
            <Header />
                <div className="farmBody">
                    <div className="farmCards">
                        <Card sx={{ maxWidth: 200 }} className="eggCard">
                            <CardActions>
                                <table className='quantityTbl'>
                                    <tr>
                                        <th>Quantity Chicken</th>
                                        <th>Quantity Eggs</th>
                                    </tr>
                                    <tr>
                                        <td>{amount[1].productamt}</td>
                                        <td>{amount[0].productamt}</td>
                                    </tr>
                                </table>
                            </CardActions>
                        </Card>
                        </div>
                        <div className="farmCards">
                        <Card sx={{ maxWidth: 200 }} className="chickenCard">
                            <CardMedia
                                sx={{ height: 140 }}
                                image={chicken}
                                title="Chicken" />
                            <CardActions>
                                <p>Chicken. Every 10 days the chicken put an egg. Estimated life time 30 days.</p>
                            </CardActions>
                            <CardActions className="mainPriceCard">
                                <div className="priceCard">
                                    <h4>$200</h4>
                                    <Button size="small" onClick={handleBuy}>Buy</Button>
                                </div>
                                <div className="priceCard">
                                    <h4>$400</h4>
                                    <Button size="small" onClick={handleSell}>Sell</Button>
                                </div>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 200 }} className="eggCard">
                            <CardMedia
                                sx={{ height: 140 }}
                                image={egg}
                                title="Egg" />
                            <CardActions>
                                <p>Egg. At 10 days a chicken is born. Estimated life time 30 days.
                                </p>
                            </CardActions>
                            <br></br>
                            <CardActions className="mainPriceCard">
                            <div className="priceCard">
                                    <h4>$20</h4>
                                    <Button size="small" onClick={handleBuy}>Buy</Button>
                                </div>
                                <div className="priceCard">
                                    <h4>$40</h4>
                                    <Button size="small" onClick={handleSell}>Sell</Button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                </div>  
            </>
            
        )
    }
    <Footer/>
    </>
  );
}