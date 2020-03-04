import Huesped from "./huesped.js"
export default class Reservacion{
    /**
     * 
     * @param {number} numeroHabitacion Numero de habitación del huesped.
     * @param {date} fechaLlegada Fecha de llegada del huesped.
     * @param {number} noches Numero de noches que se va a quedar el huesped.
     * @param {Huesped[]} huespedes Huespedes que se van a quedar.
     */
    constructor(numeroHabitacion, fechaLlegada, noches, huespedes){
        this.numeroHabitacion = numeroHabitacion
        this.fechaLlegada = fechaLlegada
        this.noches = noches
        this.huespedes = huespedes
    }
    
    getFechaFormatoCorto(){
        let fechaCorta = `${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()+1}/${this.fechaLlegada.getFullYear()}`
        return `${fechaCorta}`
    }
    addHuesped(huesped){
        this.huespedes.push = huesped
    }
    getNumHuespedes(){
        return `${this.huespedes.length}`
    }
    print(){
        let clientes = ""
        let descripcion = `Habitación ${this.numeroHabitacion}, Fecha de llegada ${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()+1}/${this.fechaLlegada.getFullYear()}, ${this.noches} reservadas.`        
        this.huespedes.forEach((huesped,i) =>{
            clientes = clientes + huesped.getDescripcion()
        })

        return `${descripcion+ clientes}`
    }
}
/*
let r1 = new Reservacion(23, new Date("2015-3-01"), 5, new Array(new Huesped("Roger Sánchez Nava", "Masculino")))
console.log(r1.getFechaFormatoCorto())
let h2 = new Huesped("Jennifer Cruz", "Femenino")
console.log(r1.getNumHuespedes())
console.log(r1.print()) */
