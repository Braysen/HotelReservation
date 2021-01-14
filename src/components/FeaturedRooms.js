import React, { Component } from 'react'
import {RoomContext} from '../RoomProvider'
import Loading from '../components/Loading'
import Room from './Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        });

        return (
            <section className="featured-rooms">
                <Title title="featured Rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
                </div>
            </section>
        )
    }
}