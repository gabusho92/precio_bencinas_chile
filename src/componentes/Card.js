import React from 'react'
import {distancia} from '../helpers/distancia'

export const Card = ({ datos, map, pos}) => {

    const dist = distancia(pos, [datos[20], datos[21]]).toFixed(2)

    const flyTo = (coords) => {
        map.flyTo(coords, 16)
        console.log(coords);
    }

    return (
        <div className="card" onClick={() => flyTo([datos[20], datos[21]])} >
            <p>{datos[3]} {datos[4]}, {datos[6]}</p>
            <p>93: {datos[14]} 95: {datos[17]} 97:{datos[15]}</p>
            <p>{dist} KM</p>
        </div>
    )
}
