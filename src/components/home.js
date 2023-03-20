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
import egg from "./styles/images/6.png"
import { url } from "../api"
import { Footer } from "./footer";
import egg1 from './styles/images/1.gif'
import Countdown from 'react-countdown';
import gold from './styles/images/11.png'
  
export const Home = () => {
    
    const [amountChicken, setAmountChicken] = useState();
    const [amountEgg, setAmountEgg] = useState();
    const [totalcash, setCash] = useState();
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(`${url}/products/productsamt/chicken`)
          .then((response) => response.json())
          .then((res) => {
            setAmountChicken(res)
            fetch(`${url}/products/productsamt/egg`)
            .then((response) => response.json())
            .then((res) => {
              setAmountEgg(res)
              fetch(`${url}/cash/all`)
              .then((response) => response.json())
              .then((res) => {
                setCash(res)
                setLoading(false);
            });
          }); 
        });       
      },[loading, amountChicken, amountEgg]);

    const handleBuyChicken = () => {
        if (amountChicken[0].totalchickens < 10 && totalcash[0].totalcash > 200) {
            fetch(`${url}/chickens/buy`, {method: 'POST'})
            .then(response => response.json())
            .then(data => 
                setTimeout(() => {
                    window.location.reload();
                }, 30000)
            )
            .catch(error => console.error(error)); 
        }else{
            alert("Operation not available, verify you have enough money or have the stock available.")
        }
    }

    const handleBuyEgg = () => {
        if (amountEgg[0].totaleggs < 10 && totalcash[0].totalcash > 20) {
            fetch(`${url}/eggs/buy`, {method: 'POST'})
            .then(response => response.json())
            .then(data => 
                setTimeout(() => {
                    window.location.reload();
                }, 45000)
            )
        }else{
            alert("You can't buy more than 10 eggs.")
        }
    }

    const handleSellChicken = () => {
        if (amountChicken[0].totalchickens > 0) {
            fetch(`${url}/chickens/sell`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            window.location.reload();   
        }else{
            alert("You don't have enough stock.")
        }
    }

    const handleSellEgg = () => {
        if (amountEgg[0].totaleggs > 0) {
            fetch(`${url}/eggs/sell`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            window.location.reload();   
        }else{
            alert("You don't have enough stock.")
        }
    }

    const handleDropEgg = () => {
        if (amountEgg[0].totaleggs > 0) {
            fetch(`${url}/eggs/drop`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            window.location.reload();   
        }else{
            alert("You don't have eggs in your stock.")
        }
    }

    const handleDropChicken = () => {
        if (amountChicken[0].totalchickens > 0) {
            fetch(`${url}/chickens/drop`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            window.location.reload();   
        }else{
            alert("You don't have chickens in your stock.")
        }
    }

  return (
    <>
    {
        loading ? 
        (
            <div className='loadingImg'>
                <img src={egg1} className="eggImg" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -60%)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                    height: 'auto'}}
                
                />
            </div>
        ) : (
            <>
            <Header />
                <div className="farmBody">
                    <div className="farmCards">
                        <Card sx={{ maxWidth: 210 }} className="eggCard">
                            <CardActions>
                                <table className='quantityTbl'>
                                    <tr>
                                        <th>Quantity Chicken</th>
                                        <th>Quantity Eggs</th>
                                    </tr>
                                    <tr>
                                        <td>{amountChicken[0].totalchickens}/10</td>
                                        <td>{amountEgg[0].totaleggs}/10</td>
                                    </tr>
                                </table>
                            </CardActions>
                            <CardActions>
                                <Button size="small" onClick={handleDropChicken}>Drop Chicken</Button>
                                <Button size="small" onClick={handleDropEgg}>Drop Egg</Button>
                            </CardActions>
                        </Card>
                        </div>
                        <div className="farmCards">
                        <Card sx={{ maxWidth: 220 }} className="chickenCard">
                            <CardMedia
                                sx={{ height: 220 }}
                                image={chicken}
                                title="Chicken" />
                            <CardActions>
                                <p>Chicken. Every 10 days the chicken put an egg. Estimated life time 30 days.</p>
                            </CardActions>
                            <CardActions className="mainPriceCard">
                                <div className="priceCard">
                                    <h3><img src={gold} width="20px"/>200</h3>
                                    <Button size="small" onClick={handleBuyChicken}><h3>Buy</h3></Button>
                                </div>
                                <div className="priceCard">
                                    <h3><img src={gold} width="20px"/>400</h3>
                                    <Button size="small" onClick={handleSellChicken}><h3>Sell</h3></Button>
                                </div>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 220 }} className="eggCard">
                            <CardMedia
                                sx={{ height: 220 }}
                                image={egg}
                                title="Egg" />
                            <CardActions>
                                <p>Egg. At 10 days a chicken is born. Estimated life time 30 days.
                                </p>
                            </CardActions>
                            <CardActions className="mainPriceCard">
                            <div className="priceCard">
                                    <h3><img src={gold} width="20px"/>20</h3>
                                    <Button size="small" onClick={handleBuyEgg}><h3>Buy</h3></Button>
                                </div>
                                <div className="priceCard">
                                    <h3><img src={gold} width="20px"/>40</h3>
                                    <Button size="small" onClick={handleSellEgg}><h3>Sell</h3></Button>
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