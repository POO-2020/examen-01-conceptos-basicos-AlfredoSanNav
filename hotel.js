import Reservacion from "./reservacion.js"
import Huesped from "./huesped.js"
class Hotel{
    /**
     * 
     * @param {string} nombre Nombre del hotel.
     * @param {Reservacion[]} reservacion Reservaciones.
     */
    constructor(nombre, reservacion){
        this.nombre = nombre
        this.reservacion = reservacion
    }
    getNumHuespedes(){
        let numHuespedes = 0
        this.reservacion.forEach(reservacion =>{
            numHuespedes = numHuespedes + reservacion.getNumHuespedes()
        })
        return `${numHuespedes}`
    }
    getCostoReservaciones(){
        return `Reservacion normal (1 día): $130 
Reservación especial (más de 3 días): $300`
    }

    print(){
        let resumen = ""
        this.reservacion.forEach(reservacion =>{
            resumen = resumen + reservacion.print()
        })
    }
}
let hotel1 = new Hotel("Hotel chido", new Array(new Reservacion(3, new Date("2020-06-01"),5, new Array(new Huesped("Alfredo Sanchez", "Masculino")))))
console.log(hotel1.print())