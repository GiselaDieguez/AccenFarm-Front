import React, { useEffect, useState } from 'react'
import "./styles/style.css";
import Header from "./header";
import { Footer } from "./footer";
import { url } from "../api"
import egg from './styles/images/1.gif'

  
export const Status = () => {
  const [values, setValues] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  fetch(`${url}/farm/all`)
    .then((response) => response.json())
    .then((res) => {
      setValues(res);
      setLoading(false);
  });
}, [loading]);

console.log(values);
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
        <div className='statisticsTbl'>
          
          <div className='list-group'>
          <table className='stTable'>
                <tr className='trTable'>
                  <th className='tdTable'>N°</th>
                  <th className='tdTable'>Time</th>
                  <th className='tdTable'>Product</th>
                  <th className='tdTable'>Amount</th>
                </tr>
          {
              values.content.map((farm, index) => (
                < >
                <tr key={index}>
                  <td className='tdTable'>{farm.transactionid}</td>
                  <td className='tdTable'>{farm.time}</td>
                  <td className='tdTable'>{farm.productid}</td>
                  <td className='tdTable'>{farm.transactionamt}</td>
                </tr>
                </>
              ))
            }
            </table>
          </div>
        </div>
        )
      }
      <Footer/>
    </>
  );
}