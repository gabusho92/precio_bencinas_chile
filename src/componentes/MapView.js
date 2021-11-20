import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


import iconGeoPosition from '../assets/icons8-geo-cerca-100.png'
import { Icon } from 'leaflet'


import 'leaflet/dist/leaflet.css';
import '../style.css'
import { datos } from '../data'
import { ShowMarker } from './ShowMarker';


export const MapView = ({ setMap, myPos }) => {


  //const position = [-33.5324252, -70.5859751]


  const MarkPop = datos.map(x => (
    <ShowMarker
      key={x[0]}
      loc={[x[20], x[21]]}
      empresa={x[10]}
      precios={[x[14], x[17], x[15]]}
      region={x[6]}
      logo={x[12]}
    />
  ))



  //  -33.5324252 -70.5859751
  return (
    <div>

      <MapContainer center={myPos.pos} zoom={15} scrollWheelZoom={false} whenCreated={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap </a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          MarkPop
        }

        {
          myPos.active &&
          <Marker position={myPos.pos} icon={new Icon({ iconUrl: iconGeoPosition, iconSize: [25, 41], iconAnchor: [12, 41] })}>
          <Popup>
            I am here.
          </Popup>
        </Marker>}


      </MapContainer>
    </div>
  )
}
