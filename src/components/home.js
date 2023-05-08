import React, { useEffect, useState } from 'react'
import "./styles/style.css";
import { Header } from "./header";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import chicken from "./styles/images/3.jpg"
import egg from "./styles/images/6.png"
import { url } from "../api"
import { Footer } from "./footer";
import egg1 from './styles/images/1.gif'
import gold from './styles/images/11.png'

  
export const Home = () => {
    
    const [amountChicken, setAmountChicken] = useState(0);
    const [amountEgg, setAmountEgg] = useState(0);
    const [totalcash, setCash] = useState(0);
    const [loading, setLoading] = useState(true)
    const [first, setFirst] = useState(false)
    
    useEffect(() => {
        fetch(`${url}/farm/validation/stockChicken`)
          .then((response) => response.json())
          .then((res) => {
            setAmountChicken(res)
            fetch(`${url}/farm/validation/stockEgg`)
            .then((response) => response.json())
            .then((res) => {
              setAmountEgg(res)
              fetch(`${url}/cash/all`)
              .then((response) => response.json())
              .then((res) => {
                setCash(res)
                setLoading(false);
                setFirst(false)
            });
          }); 
        });       
      },[loading, first, totalcash]);

    const handleBuyChicken = () => {
        if (amountChicken < 10 && totalcash > 200) {
            fetch(`${url}/chickens/buy`, {method: 'POST'})
            setFirst(true)
            let message = "Bought a chicken"
            h_alert(message)
            timer(30000)
            birthChicken()
        }else{
            alert("Operation not available, verify you have enough money or have the stock available.")
        }
    }


    const handleBuyEgg = () => {
        if (amountEgg < 10 && totalcash > 20) {
            fetch(`${url}/eggs/buy`, {method: 'POST'})
            setFirst(true)
            let message = "Bought a egg"
            h_alert(message)
            timer(45000)
            birthEgg()
        }else{
            alert("You can't buy more than 10 eggs.")
        }
    }

    const handleSellChicken = () => {
        if (amountChicken > 0) {
            fetch(`${url}/chickens/sell`, {method: 'POST'})
            setFirst(true)
            let message = "Sold a chicken"
            h_alert(message)
        }else{
            alert("You don't have enough stock.")
        }
    }

    const handleSellEgg = () => {
        if (amountEgg > 0) {
            fetch(`${url}/eggs/sell`, {method: 'POST'})
            setFirst(true) 
            let message = "Sold a egg"
            h_alert(message) 
        }else{
            alert("You don't have enough stock.")
        }
    }

    const handleDropEgg = () => {
        if (amountEgg > 0) {
            fetch(`${url}/eggs/drop`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            setFirst(true)
            let message = "Drop a egg"
            h_alert(message)
        }else{
            alert("You don't have eggs in your stock.")
        }
    }

    const handleDropChicken = () => {
        if (amountChicken > 0) {
            fetch(`${url}/chickens/drop`, {method: 'POST'})
            .then(response => response.json())
            .then(data => console.log(data))
            setFirst(true)
            let message = "Drop a chicken"
            h_alert(message)
        }else{
            alert("You don't have chickens in your stock.")
        }
    }
    const birthChicken = () => {
        const div = document.getElementById('alerts');
        const p = document.createElement('b');
        const texto = document.createTextNode('An Egg is going to hatch in 30 seconds');
    
        p.appendChild(texto);
        div.appendChild(p);

        setTimeout(() => {
            div.removeChild(p);
            }, 4000);
    }

    const birthEgg = () => {
        const div = document.getElementById('alerts');
        const p = document.createElement('b');
        const texto = document.createTextNode('An Chicken is going to hatch in 45 seconds');
    
        p.appendChild(texto);
        div.appendChild(p);

        setTimeout(() => {
            div.removeChild(p);
            }, 4000);
    }

    const timer = (timer) => {
        setTimeout(() => {
            window.location.reload(); 
        }, timer);
    }

    const h_alert = (text) => {
        const div = document.getElementById('alerts');
        const p = document.createElement('b');
        const texto = document.createTextNode(text);
    
        p.appendChild(texto);
        div.appendChild(p);

        setTimeout(() => {
            div.removeChild(p);
            }, 2500);
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
            <Header totalcash={totalcash} loading={loading}/>
                <div className="farmBody">
                    <div className="farmCards">
                        <Card sx={{ maxWidth: 200 }} className="eggCard">
                            <CardActions>
                                <table className='quantityTbl'>
                                    <tbody>
                                        <tr>
                                            <th>Quantity Chicken</th>
                                            <th>Quantity Eggs</th>
                                        </tr>
                                        <tr>
                                            <td>{amountChicken}/10</td>
                                            <td>{amountEgg}/10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardActions>
                            <CardActions>
                                <Button size="small" onClick={handleDropChicken}>Drop Chicken</Button>
                                <Button size="small" onClick={handleDropEgg}>Drop Egg</Button>
                            </CardActions>
                        </Card>
                        </div>
                        <div className="farmCards">
                        <Card sx={{ maxWidth: 180 }} className="chickenCard">
                            <img
                                width="180"
                                height="192"
                                src={chicken}
                                title="Chicken" />
                            <CardActions>
                                <p>Chicken. Every 10 days the chicken put an egg. Estimated life time 30 days.</p>
                            </CardActions>
                            <CardActions className="mainPriceCard">
                                <div className="priceCard">
                                    <h3 className='price'><img src={gold} width="20px"/>200</h3>
                                    <Button size="small" onClick={handleBuyChicken}><h3>Buy</h3></Button>
                                </div>
                                <div className="priceCard">
                                    <h3 className='price'><img src={gold} width="20px"/>400</h3>
                                    <Button size="small" onClick={handleSellChicken}><h3>Sell</h3></Button>
                                </div>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 180 }} className="eggCard">
                            <img
                                width="180"
                                src={egg}
                                title="Egg" />
                            <CardActions>
                                <p>Egg. At 10 days a chicken is born. Estimated life time 30 days.
                                </p>
                            </CardActions>
                            <CardActions className="mainPriceCard">
                            <div className="priceCard">
                                    <h3 className='price'><img src={gold} width="20px"/>20</h3>
                                    <Button size="small" onClick={handleBuyEgg}><h3>Buy</h3></Button>
                                </div>
                                <div className="priceCard">
                                    <h3 className='price'><img src={gold} width="20px"/>40</h3>
                                    <Button size="small" onClick={handleSellEgg}><h3>Sell</h3></Button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                </div>  
                <div id='alerts'></div>
                <Footer/>
            </>
            
        )
    }
    </>
  );
}