import React from 'react'
import { useEffect, useState } from 'react';
import '../stylesheets/inventory.css'
import ProductCard from '../components/ProductCard';
var json = require('../Cars.json')


export default function Inventory() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("https://jdmx.onrender.com/api").then(
            res => res.json()
        ).then(data=> {
            setBackendData(data)
        })
    }, [])
    
    const update = () => {
        let mazda = document.getElementById('mazda')
        let honda = document.getElementById('honda')
        let nissan = document.getElementById('nissan')
        let toyota = document.getElementById('toyota')
        let acura = document.getElementById('acura')
        let mitsu = document.getElementById('mitsu')
        let subaru = document.getElementById('subaru')

        let sedan = document.getElementById('sedan')
        let hatchback = document.getElementById('hatchback')
        let coupe = document.getElementById('coupe')

        let red = document.getElementById('red_car')
        let orange = document.getElementById('orange_car')
        let blue = document.getElementById('blue_car')
        let white = document.getElementById('white_car')
        let black = document.getElementById('black_car')
        let silver = document.getElementById('silver_car')

        let car_search = document.getElementById('car_text')


        let classification = [];
        let brand = [];
        let color = [];

        if (red.checked) {
            color.push('red')
        }
        if (orange.checked) {
            color.push('orange')
        }
        if (blue.checked) {
            color.push('blue')
        }
        if (white.checked) {
            color.push('white')
        }
        if (black.checked) {
            color.push('black')
        }
        if (silver.checked) {
            color.push('silver')
        } else if (color.length < 1) {color = ['red', 'orange', 'blue', 'white', 'black', 'silver']}

        if (sedan.checked) {
            classification.push('sedan')
        }
        if (hatchback.checked) {
            classification.push('hatchback')
        }
        if (coupe.checked) {
            classification.push('coupe')
        } else if (classification.length < 1) {classification = ['hatchback', 'sedan', 'coupe']}

        if (mazda.checked) {
            brand.push('Mazda')
        }
        if (honda.checked) {
            brand.push('Honda')
        }
        if (nissan.checked) {
            brand.push('Nissan')
        }
        if (toyota.checked) {
            brand.push('Toyota')
        }
        if (acura.checked) {
            brand.push('Acura')
        }
        if (mitsu.checked) {
            brand.push('Mitsubishi')
        }
        if (subaru.checked) {
            brand.push('Subaru')
        } else if (brand.length < 1) {brand = ["Mazda", "Honda", "Subaru", "Nissan", "Toyota", "Acura", "Mitsubishi"]}

        var filtered = (backendData.filter(function(value) {
            if ((classification.includes(value.classification))&&(brand.includes(value.brand))&&color.includes((value.color))) {
                return value;
            }
        }))

        if (filtered.length === 16) {
            car_search.innerText = 'All Results'
        } else {car_search.innerText = `${filtered.length} Results`}
        

        var display = document.getElementById('display');
        display.innerHTML = '';
        let cars = filtered;
        cars.forEach(car => {
        let carCards = document.createElement('div')
        carCards.innerHTML = `
        <img src=${car.prodimg} alt="${car.product_name}"></img>
        <div class="prod_info">
            <p class="title">${car.year_made} ${car.product_name}</p>
            <div class="costmpg">
                <div class="price">
                    <p>
                    ${car.price}
                    </p>
                    <p class="disclaimer">
                        starting MSRP*
                    </p>
                </div>
                <div class="mpgcard">
                    <p>
                    ${car.mpg}
                    </p>
                    <p class="disclaimer">
                        Up to Est. MPG*
                    </p>
                </div>
            </div>
            <a href="/p?id=${car.id}"><button class="prod_button">Explore</button></a>
        </div>
`
        display.appendChild(carCards)
        })
    }

    const reset = () => {
        let mazda = document.getElementById('mazda')
        let honda = document.getElementById('honda')
        let nissan = document.getElementById('nissan')
        let toyota = document.getElementById('toyota')
        let acura = document.getElementById('acura')
        let mitsu = document.getElementById('mitsu')
        let subaru = document.getElementById('subaru')

        let sedan = document.getElementById('sedan')
        let hatchback = document.getElementById('hatchback')
        let coupe = document.getElementById('coupe')

        let red = document.getElementById('red_car')
        let orange = document.getElementById('orange_car')
        let blue = document.getElementById('blue_car')
        let white = document.getElementById('white_car')
        let black = document.getElementById('black_car')
        let silver = document.getElementById('silver_car')

        mazda.checked = false;
        honda.checked = false;
        nissan.checked = false;
        toyota.checked = false;
        acura.checked = false;
        mitsu.checked = false;
        subaru.checked = false;
        sedan.checked = false;
        hatchback.checked = false;
        coupe.checked = false;
        red.checked = false;
        orange.checked = false;
        blue.checked = false;
        white.checked = false;
        black.checked = false;
        silver.checked = false;
        update();
    }
  return (
    <div>
      <body>
    {/* <!-- Car Grid --> */}
    <section id="trending" className="trending">
        <div className='filter'>
        <form id='car_filters'>
            <div className='reset_button'>
                <h6>Filter</h6>
                <p onClick={reset}>Reset Filters</p>
            </div>

            <h6>Brand</h6>

            <div>
            <input id="mazda" className='cards' type="checkbox" onChange={update}/>
            <label for="mazda">Mazda</label><br></br>
            </div>

            <div>
            <input id="nissan" className='cards' type="checkbox" onChange={update}/>
            <label for="nissan">Nissan</label><br></br>
            </div>

            <div>
            <input id="honda" className='cards' type="checkbox" onChange={update}/>
            <label for="honda">Honda</label><br></br>
            </div>

            <div>
            <input id="toyota" className='cards' type="checkbox" onChange={update}/>
            <label for="toyota">Toyota</label><br></br>
            </div>

            <div>
            <input id="acura" className='cards' type="checkbox" onChange={update}/>
            <label for="acura">Acura</label><br></br>
            </div>

            <div>
            <input id="mitsu" className='cards' type="checkbox" onChange={update}/>
            <label for="mitsu">Mitsubishi</label><br></br>
            </div>

            <div>
            <input id="subaru" className='cards' type="checkbox" onChange={update}/>
            <label for="subaru">Subaru</label><br></br>
            </div>
            

            <h6>Classification</h6>
            <div>
            <input id="coupe" className='cards' type="checkbox" onChange={update}/>
            <label for="coupe">Coupe</label><br></br>
            </div>

            <div>
            <input id="sedan" className='cards' type="checkbox" onChange={update}/>
            <label for="sedan">Sedan</label><br></br>
            </div>

            <div>
            <input id="hatchback" className='cards' type="checkbox" onChange={update}/>
            <label for="hatchback">Hatchback</label><br></br>
            </div>

            <h6>Color</h6>
            <div>
            <input id="red_car" className='cards' type="checkbox" onChange={update}/>
            <label for="red_car">Red</label><br></br>
            </div>

            <div>
            <input id="blue_car" className='cards' type="checkbox" onChange={update}/>
            <label for="blue_car">Blue</label><br></br>
            </div>

            <div>
            <input id="orange_car" className='cards' type="checkbox" onChange={update}/>
            <label for="orange_car">Orange</label><br></br>
            </div>

            <div>
            <input id="white_car" className='cards' type="checkbox" onChange={update}/>
            <label for="white_car">White</label><br></br>
            </div>

            <div>
            <input id="black_car" className='cards' type="checkbox" onChange={update}/>
            <label for="black_car">Black</label><br></br>
            </div>

            <div>
            <input id="silver_car" className='cards' type="checkbox" onChange={update}/>
            <label for="silver_car">Silver</label><br></br>
            </div>
        </form>
        </div>
        <div className='car_display'>
        <h1 id="car_text">All Results</h1>
        <section id='display' className="trend_grid">
        

            {(typeof backendData[0] === 'undefined') ? (
                 <p>Loading...</p>
            ):(
                backendData.map((car)=> (
                    <ProductCard {...car}/>
                ))
            )}

        </section>
        </div>
    </section>
    {/* <!-- End Car Grid --> */}
</body>
    </div>
  )
}
