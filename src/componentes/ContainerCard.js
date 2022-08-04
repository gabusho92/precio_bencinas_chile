import React, { useState } from 'react'
import { Card } from './Card'
// import { flyTo } from '../helpers/flyTo'

export const ContainerCard = ({ map, position, bencineras }) => {

    const [search, setSearch] = useState('')


    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className="mt-3 card-container">
            <div className='d-flex'>
                <input className="form-control" type="text" name="busqueda" placeholder="Region, Comuna o Calle..." onChange={handleChange} />
                {/* <button className="btn btn-primary" onClick={() => flyTo(map, position)}><i class="fa-solid fa-location-dot"></i></button> */}
            </div>
                <hr />
            <div className="containerCard overflow-scroll mb-5">
                {
                    bencineras.filter(element => {

                        if (
                            element.direccion_calle.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                            element.nombre_comuna.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                            element.nombre_region.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                        ) {
                            return element
                        }
                
                    }).map(x => (
                        <Card
                            key={x.id}
                            datos={x}
                            map={map}
                        />
                    )).slice(0, 20)
                    
                }
            </div>
        </div>
    )
}
