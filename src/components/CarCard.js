import React from 'react'

export default function CarCard(props) {
  let inv = () => {
    window.location.replace("inventory");
}
  return (
    <div class='car_card'>
            <div class="description">
                <p id="car_text_3">{props.year}</p>
                <h5 id="head_text_3">{props.name}</h5>
                <p id="tagline_3">{props.tagline}</p>
                <div class="prices"> <div class="money"><span id="price_3">{props.price}</span><p class="money_text">Starting MSRP *</p></div> <div class="mpg"><span id="mpg_3">{props.mpg}</span><p>Up to Est. MPG *</p></div></div>
                <button onClick={inv}>Explore</button>
            </div>
            <img src={props.img} alt={props.name} />
      </div>
  )
}
