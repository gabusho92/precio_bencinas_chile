export const distancia = (coordA, coordB) => {
    const radio = 6371.0

    const c1 = coordA[0] * Math.PI/180
    const c2 = coordB[0] * Math.PI/180

    const angulo1 = (coordB[0] - coordA[0]) * Math.PI/180
    const angulo2 = (coordB[1] - coordA[1]) * Math.PI/180

    const a = Math.sin(angulo1/2) * Math.sin(angulo1/2) +
              Math.cos(c1) * Math.cos(c2) *
              Math.sin(angulo2) * Math.sin(angulo2/2)
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    const d = radio * c

    return d
}