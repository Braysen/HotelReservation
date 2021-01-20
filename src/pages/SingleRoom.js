import React, { Component } from 'react'
import defaultBcg from '../resources/images/room-1.jpeg'
import Hero from '../components/Hero'
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
        return (
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
        )
    }
}
//2:50:49
