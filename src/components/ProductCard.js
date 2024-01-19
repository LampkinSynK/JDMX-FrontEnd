import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div>
                <img src={props.prodimg} alt="supra"></img>
                <div class="prod_info">
                    <p class="title">{props.year_made} {props.product_name}</p>
                    <div class="costmpg">
                        <div class="price">
                            <p>
                                {props.price}
                            </p>
                            <p class="disclaimer">
                                starting MSRP*
                            </p>
                        </div>
                        <div class="mpgcard">
                            <p>
                                {props.mpg}
                            </p>
                            <p class="disclaimer">
                                Up to Est. MPG*
                            </p>
                        </div>
                    </div>
                    <Link to={"/p?id=" + props.id}><button class="prod_button">Explore</button></Link>
                </div>
    </div>
  )
}
