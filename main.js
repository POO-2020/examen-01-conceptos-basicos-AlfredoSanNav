import Hotel from "./hotel.js"
class Main{
    constructor(){
        let hotel1 = new Hotel("Hotel chido", new Array(new Reservacion(3, new Date("2020-06-01"),5, new Array(new Huesped("Alfredo Sanchez", "Masculino")))))
    }
}

let app = new Main()