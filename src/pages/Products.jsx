import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../stylesheets/products.css'

export default function Products() {
  const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("https://jdmx.onrender.com/api").then(
            res => res.json()
        ).then(data=> {
            setBackendData(data)
        })
    }, [])

    const params = new URLSearchParams(document.location.search);
    const currentID = Number(params.get("id"))
    const currentCar = backendData[currentID-100]

    const addToCart = () => {
      axios.post('https://jdmx.onrender.com/addcartitem', {product_id: currentCar.id, customer_id: localStorage.getItem('id')})
      .then(res => {
      console.log('Success!')
      document.getElementById('add_cart').textContent = '✔️ '
  })
  .catch(err => console.log(err))
    }

  return (

    <div>
    {typeof currentCar === 'undefined' ? (
      <p>Loading...</p>
    ): (
      <div className='product_body'>
        <img id='prod_img' src={currentCar.prodimg}></img>
        <div className='purchase_info'>
          <div className='brand_name'>
        <p id='brand'>{currentCar.brand} ⋅</p>
        <p id='prod_name'> {currentCar.product_name}</p>
        </div>
        <p id='tagline'>{currentCar.tagline}</p>
        <p id='year'>Year: {currentCar.year_made}</p>
        <p id='price'>Price: {currentCar.price}</p>
        <p>Additional Info: </p>
        <p id='mpg'>{currentCar.mpg} mpg</p>
        <p id='color'>Color: {currentCar.color}</p>
        <p id='classification'>Classification: {currentCar.classification}</p>
        <button id='add_cart' onClick={addToCart}>Add to cart</button>
        </div>
        </div>
      // "id": 100,
      // "product_name": "Miata",
      // "brand": "Mazda",
      // "tagline": "Fun at first sight.",
      // "img": "images/miata.jpg",
      // "year_made": 2023,
      // "price": "$28,050",
      // "mpg": "26/34",
      // "prodimg": "images/miata_prod.png",
      // "color": "white",
      // "classification": "coupe"
    )}

 </div>
  )
}
