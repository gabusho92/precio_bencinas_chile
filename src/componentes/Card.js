import React from 'react'
import { flyTo } from '../helpers/flyTo';
import { urlImage } from '../helpers/showLogo';

export const Card = ({ datos, map }) => {


    

    return (
        <div role="button" data-toggle="tooltip" className="card p-3 mb-2 me-3 overflow-scroll" onClick={() => flyTo(map, [datos.ubicacion.latitud, datos.ubicacion.longitud])} >
            <div className="card-text">
                <p>{datos.direccion_calle} {datos.direccion_numero}, {datos.nombre_comuna}</p>
                <p>93: {datos.precios["gasolina 93"]} 95: {datos.precios["gasolina 95"]} 97:{datos.precios["gasolina 97"]}</p>
            </div>
            <div className="card-image">
                <img src={urlImage(datos.distribuidor.nombre)} width="50" height="50" alt={datos[10]} />
                <p>{datos.distancia} KM</p>
            </div>
        </div>
    )
}
