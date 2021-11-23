import React from 'react'
import {Marker, Popup} from 'react-leaflet'

import {Icon} from 'leaflet'
import { urlImage } from '../helpers/showLogo'


export const ShowMarker = ({loc, empresa, precios, region, logo}) => {
    

    return (
        <Marker position={loc} icon={new Icon({iconUrl: urlImage(empresa), iconSize: [60, 41], iconAnchor: [22, 41]})}>
            <Popup>
            {empresa} {region} <br></br> {precios}
            </Popup>
        </Marker>
    )
}
