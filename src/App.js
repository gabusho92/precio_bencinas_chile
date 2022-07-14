import React, { useEffect, useState } from 'react'
import { MapView } from './componentes/MapView'
import { ContainerCard } from './componentes/ContainerCard'


export const App = () => {
    const [map, setMap] = useState(null)
    const [position, setPosition] = useState({
        'active': false,
        'pos': []
    })

    function geoSucces(position) {
        setPosition({
            'active': true,
            'pos': [position.coords.latitude, position.coords.longitude]
        });
        console.log(position.coords.latitude, position.coords.longitude);
    }

    function geoError(position) {
        setPosition({
            'active': false,
            'pos': [-20.213349467685, -70.148566067219]
        });
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(geoSucces, geoError);
    }, [])


    return (
        <div className='container app'>
            <h1>Mapa Bencineras</h1>
            <hr />

            <div className="d-flex gap-3">
                {
                    position.pos.length > 0 &&

                    <ContainerCard map={map} position={position.pos} />
                }


                {
                    position.pos.length > 0 &&
                    <MapView
                        setMap={setMap}
                        myPos={position}
                    />}
            </div>
        </div>
    )
}
