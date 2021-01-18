import React, { Component } from 'react'
import defaultBcg from '../resources/images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../RoomProvider'

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
                        <h3>No such room could be found</h3>
                        <Link to='/rooms' className="btn-primary">
                            back to room
                        </Link>
                    </div>
        }
        return (
            <div>
                hello {room.name}
            </div>
        )
    }
}
