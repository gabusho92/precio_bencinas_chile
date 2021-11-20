import React from 'react'
import {Marker, Popup} from 'react-leaflet'

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'


export const ShowMarker = ({loc, empresa, precios, region, logo}) => {
    

    return (
        <Marker position={loc} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>
            {empresa} {region} <br></br> {precios}
            </Popup>
        </Marker>
    )
}
