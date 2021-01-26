import React, { Component } from 'react'
import defaultBcg from '../resources/images/room-1.jpeg'
//import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../RoomProvider'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return  <div className="error">
                        <h3 style={{color: 'white'}}>No such room could be found</h3>
                        <Link to='/rooms' className="btn-primary">
                            back to room
                        </Link>
                    </div>
        }
        const {
                name,
                description,
                capacity,
                size,
                price,
                extras,
                breakfast,
                pets,
                images
              } = room;
        const [mainImg, ...defaultImg] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return  <div>
                                        <img key={index} src={item} alt={name}></img>
                                    </div>
                            
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3 style={{color: 'var(--text-color)'}}>details</h3>
                            <p style={{color: 'var(--title-color)'}}>{description}</p>
                        </article>
                        <article className="info">
                            <h3 style={{color: 'var(--text-color)'}}>info</h3>
                            <h6 style={{color: 'var(--title-color)'}}>price : ${price}</h6>
                            <h6 style={{color: 'var(--title-color)'}}>size : ${size} SOFT</h6>
                            <h6 style={{color: 'var(--title-color)'}}>
                                max capacity : {""}{
                                    capacity > 1 ? `${capacity} people` :
                                    `${capacity} person`
                                }
                            </h6>
                            <h6 style={{color: 'var(--title-color)'}}>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6 style={{color: 'var(--title-color)'}}>
                                {breakfast && "free breakfast included"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6 style={{color: 'var(--text-color)'}}>extras</h6>
                    <ul className="extras" style={{color: 'var(--title-color)'}}>
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}