import React from 'react'
import {Marker, Popup} from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'



export const MyPos = () => {
    const position = [-33.5324252, -70.5859751]


    
    return (
        <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>   
    )
}
