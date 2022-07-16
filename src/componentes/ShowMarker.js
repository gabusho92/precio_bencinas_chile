import React from 'react'
import { Marker, Popup } from 'react-leaflet'

import { Icon } from 'leaflet'
import { urlImage } from '../helpers/showLogo'


export const ShowMarker = ({ bencinera }) => {


    const loc = [bencinera.ubicacion.latitud, bencinera.ubicacion.longitud]
    const empresa = bencinera.distribuidor.nombre
    const precios = bencinera.precios['gasolina 93']

    return (
        <Marker position={loc} icon={new Icon({iconUrl: urlImage(empresa), iconSize: [60, 41], iconAnchor: [22, 41]})}>
            <Popup>
            {/* {empresa} {region} <br></br> {precios} */}
            {empresa}  <br></br> {precios}
            </Popup>
        </Marker>
    )
}
