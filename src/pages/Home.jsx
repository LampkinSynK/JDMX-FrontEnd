import React from 'react'
// import { useEffect } from 'react';
import CarCard from '../components/CarCard';
import '../stylesheets/home.css' 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
var json = require('../Cars.json')


export default function Home() {
    console.log(json.cars)
    let inv = () => {
        window.location.replace("inventory");
    }
    let chat = () => {
        window.location.replace("contact");
    }

    let newJdm = () => {
        const newJdm = document.getElementById('newJdm')
        const imported = document.getElementById('imported')
        const oldJdm = document.getElementById('oldJdm')
        const modernJdm = document.getElementById('modernJdm')
        imported.style.display = 'none';
        oldJdm.style.display = 'none';
        modernJdm.style.display = 'none';
        newJdm.style.display = 'flex';
    }

    let imported = () => {
        const newJdm = document.getElementById('newJdm')
        const imported = document.getElementById('imported')
        const oldJdm = document.getElementById('oldJdm')
        const modernJdm = document.getElementById('modernJdm')
        imported.style.display = 'flex';
        oldJdm.style.display = 'none';
        modernJdm.style.display = 'none';
        newJdm.style.display = 'none';
    }

    let oldJdm = () => {
        const newJdm = document.getElementById('newJdm')
        const imported = document.getElementById('imported')
        const oldJdm = document.getElementById('oldJdm')
        const modernJdm = document.getElementById('modernJdm')
        imported.style.display = 'none';
        oldJdm.style.display = 'flex';
        modernJdm.style.display = 'none';
        newJdm.style.display = 'none';
    }

    let modernJdm = () => {
        const newJdm = document.getElementById('newJdm')
        const imported = document.getElementById('imported')
        const oldJdm = document.getElementById('oldJdm')
        const modernJdm = document.getElementById('modernJdm')
        imported.style.display = 'none';
        oldJdm.style.display = 'none';
        modernJdm.style.display = 'flex';
        newJdm.style.display = 'none';
    }

  return (
    <div>
      <body>
    {/* <!-- Video Carousel --> */}
    {/* <section class="car_carousel"> */}
    <div className='car_carousel'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        
      <SwiperSlide>
        <video className='car_videos' src="videos/S2000.mp4" autoPlay muted loop></video>
        </SwiperSlide>

        <SwiperSlide>
        <video className='car_videos' src="videos/Miata.mp4" autoPlay muted loop></video>
        </SwiperSlide>

        <SwiperSlide>
        <video className='car_videos' src="videos/NSX.mp4" autoPlay muted loop></video>
        </SwiperSlide>

        <SwiperSlide>
        <video className='car_videos' src="videos/GTR.mp4" autoPlay muted loop></video>
        </SwiperSlide>
        
      
    </Swiper>
    </div>
    {/* </section> */}

    {/* <!-- Car Card content --> */}
    <section class="car_body">
        <h3>Explore All Vehicles</h3>
        {/* <!-- Regular List --> */}
        <div class="lineup">
            <a onClick={newJdm}>New JDM</a>
            <a onClick={imported}>Imported</a>
            <a onClick={oldJdm}>90's JDM</a>
            <a onClick={modernJdm}>2000's JDM</a>
        </div> 
        {/* <!-- Mobile Dropdown --> */}
        <select id="selectBox" onchange="changeFunc();">
            <option value="1">New JDM</option>
            <option value="2">Imported</option>
            <option value="3">90's JDM</option>
            <option value="4">2000's JDM</option>
        </select>
        <div class="line"></div>
        <div class="sell_carousel">
            <div id='newJdm'>
            <CarCard {...json.cars[0]}/>
            <CarCard {...json.cars[1]}/>
            <CarCard {...json.cars[2]}/>
            </div>
            <div id='imported'>
            <CarCard {...json.cars[6]}/>
            <CarCard {...json.cars[8]}/>
            <CarCard {...json.cars[7]}/>
            </div>
            <div id='oldJdm'>
            <CarCard {...json.cars[4]}/>
            <CarCard {...json.cars[3]}/>
            <CarCard {...json.cars[5]}/>
            </div>
            <div id='modernJdm'>
            <CarCard {...json.cars[9]}/>
            <CarCard {...json.cars[10]}/>
            <CarCard {...json.cars[11]}/>
            </div>
        </div>
    </section>

    {/* <!-- Help Desk Section --> */}
    <section class="shopping">
        <h1>Shopping Tools</h1>
        <div class="help_desk">
            <div class="help_selection" onClick={inv}><p>Inventory</p></div>
            <div class="help_selection"><p>Import Locations</p></div>
            <div class="help_selection"><p>Local Dealers</p></div>
            <div class="help_selection"><p>Information</p></div>
        </div>
    </section>

    {/* <!-- Support Section --> */}
    <section class="discover">
        <h1 id="discover">Discover JDMX</h1>
        <div class="discover_items">
            <div class="chatrepair"><p>Repair Center</p></div>
            <div onClick={chat} class="chatrepair"><p>Contact Us</p></div>
        </div>
    </section>
    

    
</body>
    </div>
  )
  
}
