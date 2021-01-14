import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../resources/images/room-1.jpeg'

export default function Room({room}) {
    const {name, slug, images, price} = room;
    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}
/* 2:28:06 */