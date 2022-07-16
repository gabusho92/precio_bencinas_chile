import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'


import 'leaflet/dist/leaflet.css';
import '../style.css'
// import { datos } from '../data'
import { ShowMarker } from './ShowMarker';


export const MapView = ({ setMap, myPos, bencineras }) => {


  return (
    <div>

      <MapContainer center={myPos.pos} zoom={15} scrollWheelZoom={false} whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap </a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          bencineras &&
          bencineras.map((x,i) => (
              <ShowMarker
                key={i}
                bencinera = {x}
              />
            ))
        }

        {
          myPos.active &&
          <Marker position={myPos.pos} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
            <Popup>
              I am here.
            </Popup>
          </Marker>}


      </MapContainer>
    </div>
  )
}
