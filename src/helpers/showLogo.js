import { bencineras } from "../assets/logos"

export const urlImage = (distribuidora) => {
    const url = bencineras.find(x => x.name === distribuidora)

    if(url)
    {
        return url.logo
    }else{
        return 'http://api.cne.cl/brands/sin bandera.svg'
    }
}