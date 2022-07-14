import React from 'react'
import { flyTo } from '../helpers/flyTo';
import { urlImage } from '../helpers/showLogo';

export const Card = ({ datos, map }) => {


    

    return (
        <div role="button" data-toggle="tooltip" className="card p-3 mb-2 overflow-scroll" onClick={() => flyTo(map, [datos[20], datos[21]])} >
            <div className="card-text">
                <p>{datos[3]} {datos[4]}, {datos[6]}</p>
                <p>93: {datos[14]} 95: {datos[17]} 97:{datos[15]}</p>
            </div>
            <div className="card-image">
                <img src={urlImage(datos[10])} width="50" height="50" alt={datos[10]} />
                <p>{datos[30]} KM</p>
            </div>
        </div>
    )
}
