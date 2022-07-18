import React, { useEffect, useState } from 'react'
import { MapView } from './componentes/MapView'
import { ContainerCard } from './componentes/ContainerCard'
import { distancia } from './helpers/distancia'



export const App = () => {
    const key = 'DaIOOwB17V';
    let url = `https://api.cne.cl/v3/combustibles/vehicular/estaciones?token=${key}`

    const [map, setMap] = useState(null)
    const [position, setPosition] = useState({
        'active': false,
        'pos': ''
    })

    const [bencineras, setBencineras] = useState(null)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(geoSucces, geoError)
    }, [])

    useEffect(() => {
        if (position.pos.length > 0) {

            console.log('mi posicion:', position.pos)
            fetch(url).then(respo => respo.json())
                .then(data => setBencineras(data.data.map((element) => {
                    const dist = distancia(position.pos, [element.ubicacion.latitud, element.ubicacion.longitud]).toFixed(2)
                    return { ...element, distancia: Number(dist) }

                }).sort((a, b) => a.distancia - b.distancia)))
        }


    }, [position])


    // POSICION SI PERMITE UBICACION
    function geoSucces(position) {
        setPosition({
            'active': true,
            'pos': [position.coords.latitude, position.coords.longitude]
        });
        console.log(position.coords.latitude, position.coords.longitude);
    }

    // POSICION SI NO PERMITE UBICACION
    function geoError(position) {
        setPosition({
            'active': false,
            'pos': [-20.213349467685, -70.148566067219]
        });
    }

    // useEffect(() => {
    //     if(bencineras)
    //     {

    //         navigator.geolocation.getCurrentPosition(geoSucces, geoError);
    //     }
    // }, [])


    return (
        <div>

            <nav className="navbar navbar-light bg-dark">
                <a className="navbar-brand text-white p-3" href="#">
                        Precio Bencinas
                </a>
            </nav>

            <hr />
            <div >
            <div className="d-flex gap-3 app-conteiner justify-content-center">
                {
                    // RENDERIZAR LISTA

                    bencineras
                        ? position.pos.length > 0
                            ?
                            [
                                <ContainerCard key={0} map={map} position={position.pos} bencineras={bencineras} />,
                                <MapView key={1} setMap={setMap} myPos={position} bencineras={bencineras} />
                            ]
                            : ''
                        : <div className="spinner-border m-auto" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                }



            </div>
            </div>
        </div>
    )
}
