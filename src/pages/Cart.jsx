import React from 'react'
import { useState, useEffect } from 'react'
import '../stylesheets/cart.css'
import axios from 'axios'


export default function Cart() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch(`https://jdmx.onrender.com/cart?user=${localStorage.getItem('id')}`).then(
            res => res.json()
        ).then(data=> {
            setBackendData(data)
        })
        console.log(JSON.stringify(backendData))
    }, [])

    const removeCart = (event) => {
              axios.post(`https://jdmx.onrender.com/removeCart?id=${event.target.value}`)
          .then(res => {
            console.log('success')        
          })
          .catch(err => console.log(err))
          window.location.reload();
    
    }

  return (
    <div>
      <section className='product_section'>
      {(typeof backendData[0] === 'undefined') ? (
                 <p>No Items Found</p>
            ):(
                backendData.map((car)=> (
                    <div className='cart_section'>
                        <div className='products'>
                        <div className='img_container'><img alt='car_img' className='cart_img' src={car.prodimg}></img></div>
                        <div div='car_names'>
                        <p className='cart_name'>{car.product_name}</p>
                        <p className='quantity'>Quantity: 1</p>
                        </div>
                        <div className='right_flex'>
                        <button class='remove_btn' value={car.cart_id} onClick={removeCart}>x</button>
                        <p className='cart_price'>{car.price}</p>
                        </div>
                        </div>
                        
                    </div>
                ))
            )}
      </section>
      <div className='checkout'>
                            
                        </div>
    </div>
  )
}
