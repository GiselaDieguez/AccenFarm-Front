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
      },[loading]);


    const handleBuyChicken = () => {
        if (amountChicken[0].totalchickens < 10 && totalcash[0].totalcash > 200) {
            fetch(`${url}/chickens/buy`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            window.location.reload();   
        }else{
            alert("Operation not available, verify you have enough money or have the stock available.")
        }
    }

    const handleBuyEgg = () => {
        if (amountEgg[0].totaleggs < 10 && totalcash[0].totalcash > 20) {
            fetch(`${url}/eggs/buy`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
            window.location.reload();   
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
                                    <Button size="small" onClick={handleBuyChicken}>Buy</Button>
                                </div>
                                <div className="priceCard">
                                    <h4>$400</h4>
                                    <Button size="small" onClick={handleSellChicken}>Sell</Button>
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
                                    <Button size="small" onClick={handleBuyEgg}>Buy</Button>
                                </div>
                                <div className="priceCard">
                                    <h4>$40</h4>
                                    <Button size="small" onClick={handleSellEgg}>Sell</Button>
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