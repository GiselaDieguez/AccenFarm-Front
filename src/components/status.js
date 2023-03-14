import React, { useEffect, useState } from 'react'
import "./styles/style.css";
import Header from "./header";
import { Footer } from "./footer";
import { url } from "../api"
import egg from './styles/images/1.gif'

  
export const Status = () => {
  const [buy, setBuy] = useState()
  const [sell, setSell] = useState()
  const [drop, setDrop] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  fetch(`${url}/farm/list/buy`)
    .then((response) => response.json())
    .then((res) => {
      setBuy(res);
      fetch(`${url}/farm/list/sell`)
      .then((response) => response.json())
      .then((res) => {
      setSell(res);
      fetch(`${url}/farm/list/drop`)
      .then((response) => response.json())
      .then((res) =>{
        setDrop(res)
        setLoading(false);
      })
  });
  });
}, [loading]);

  return (
    <>
    <Header/>
    {
      loading ? 
      (
        <img src={egg} class="eggImg" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-30%, -30%)',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0px',
          margin: '50px 0px',
          width: '200px',
          height: 'auto'
      }}></img>
      ):(
        <section className='tblProducts'>
          <div className='statisticsTbl'>
            <div className='list-group'>
              <table className='stTable'>
                <caption>Purchased Products</caption>
                  <tr className='trTable'>
                    <th className='tdTable'>N°</th>
                    <th className='tdTable'>Time</th>
                    <th className='tdTable'>Product</th>
                    <th className='tdTable'>Price</th>
                    <th className='tdTable'>Amount</th>
                  </tr>
                  {
                buy.map((buyproduct, index) => (
                  < >
                  <tr key={index}>
                    <td className='tdTable'>{index + 1}</td>
                    <td className='tdTable'>{buyproduct.time}</td>
                    <td className='tdTable'>{buyproduct.productnm}</td>
                    <td className='tdTable'>{buyproduct.productprice}</td>
                    <td className='tdTable'>{buyproduct.transactionamt}</td>
                  </tr>
                  </>
                ))
              }
              </table>
            </div>
          </div>
          <div className='statisticsTbl'>
            <div className='list-group'>
              <table className='stTable'>
                <caption>Sold Products</caption>
                  <tr className='trTable'>
                    <th className='tdTable'>N°</th>
                    <th className='tdTable'>Time</th>
                    <th className='tdTable'>Product</th>
                    <th className='tdTable'>Price</th>
                    <th className='tdTable'>Amount</th>
                  </tr>
                  {
                sell.map((sellproduct, index) => (
                  < >
                  <tr key={index}>
                    <td className='tdTable'>{index + 1}</td>
                    <td className='tdTable'>{sellproduct.time}</td>
                    <td className='tdTable'>{sellproduct.productnm}</td>
                    <td className='tdTable'>{sellproduct.productprice}</td>
                    <td className='tdTable'>{sellproduct.transactionamt}</td>
                  </tr>
                  </>
                ))
              }
              </table>
            </div>
          </div>
          <div className='statisticsTbl'>
            <div className='list-group'>
              <table className='stTable'>
                <caption>Deleted Products</caption>
                  <tr className='trTable'>
                    <th className='tdTable'>N°</th>
                    <th className='tdTable'>Time</th>
                    <th className='tdTable'>Product</th>
                    <th className='tdTable'>Amount</th>
                  </tr>
                  {
                drop.map((dropproduct, index) => (
                  < >
                  <tr key={index}>
                    <td className='tdTable'>{index + 1}</td>
                    <td className='tdTable'>{dropproduct.time}</td>
                    <td className='tdTable'>{dropproduct.productnm}</td>
                    <td className='tdTable'>{dropproduct.transactionamt}</td>
                  </tr>
                  </>
                ))
              }
              </table>
            </div>
          </div>
        </section>
        ) 
      }
      <Footer/>
    </>
  );
}