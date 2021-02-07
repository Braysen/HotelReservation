import React,{useContext} from 'react'
import {RoomContext} from '../RoomProvider'
import Title from '../components/Title'

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const{
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    let types = getUnique(rooms, 'type');

    types = ['all', ...types];

    types =  types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');

    people = people.map((item, index) => {
        return  <option key={index} value={item}>
                    {item}
                </option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label
                        htmlFor="type"
                        style={{color: 'white'}}>room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {
                            types
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label
                        htmlFor="capacity"
                        style={{color: 'white'}}>Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {
                            people
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price" style={{color: 'white'}}>
                        room price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="size" style={{color: 'white'}}>room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast" style={{color: 'white'}}>breakfast</label>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets" style={{color: 'white'}}>pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}