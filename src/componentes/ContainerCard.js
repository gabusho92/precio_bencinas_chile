import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { datos } from '../data'
import { distancia } from '../helpers/distancia'
import markerIconPng from '../assets/icons8-geo-cerca-100.png'
import { flyTo } from '../helpers/flyTo'

export const ContainerCard = ({ map, position }) => {
    //datos.map(x => console.log(x[10]))
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {

        setData(datos.map(function (element) {
            const dist = distancia(position, [element[20], element[21]]).toFixed(2)
            return [...element, Number(dist)]

        }).sort((a, b) => a[30] - b[30]))


    }, [position])

    const showCard = data.filter(element => {

        if (
            element[8].toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            element[6].toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            element[3].toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
            return element
        }

    }).map(x => (
        <Card
            key={x[0]}
            datos={x}
            map={map}
        />
    )).slice(0, 20)


    /* Logo de Bencineras
        const arrLogos = []
        const bencineras = () => {
            const arrBencineras = []
            datos.forEach(element => {
                if (arrBencineras.includes(element[10])) return;
    
                arrBencineras.push(element[10])
                arrLogos.push({
                    name: element[10],
                    logo: element[12]
                })
            });
            //console.log(arrBencineras);
            //console.log(arrLogos);
    
        }
    
        //bencineras()
    
    */

    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className="containerCard">
            <div className="inputs">
                <input className="inputSearch" type="text" name="busqueda" placeholder="Region, Comuna o Calle..." onChange={handleChange} />
                <button className="btn-pos" onClick={() => flyTo(map, position)}><img className=".btn-pos-image" src={markerIconPng} width="20" height="20" alt="button" /></button>
            </div>
                <hr />
            <div className="containerScroll">
                {
                    showCard

                }
            </div>
        </div>
    )
}
