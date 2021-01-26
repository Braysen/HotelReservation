import React from 'react'
import loadingGif from '../resources/images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4 style={{color: 'white'}}>rooms data loading...</h4>
            <img src={loadingGif} alt=""/>
        </div>
    )
}
