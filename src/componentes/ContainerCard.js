import React, { useState } from 'react'
import { Card } from './Card'
import { datos } from '../data'

export const ContainerCard = ({ map, position }) => {
    //datos.map(x => console.log(x[10]))

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

    bencineras()

    const [search, setSearch] = useState('')


    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className="containerCard">

            <input className="inputSearch" type="text" name="busqueda" placeholder="      Region, Comuna o Calle..." onChange={handleChange} />
            <hr />
            <div className="containerScroll">
                {
                    datos.filter(element => {
                        if(search === "" || search.length < 4) return

                        if (element[8].toLocaleLowerCase().includes(search.toLocaleLowerCase()) || element[6].toLocaleLowerCase().includes(search.toLocaleLowerCase()) || element[3].toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                            return element
                        }

                    }).map(x => (
                        <Card
                            key={x[0]}
                            datos={x}
                            map={map}
                            pos={position}
                        />
                    ))
                }
            </div>
        </div>
    )
}
