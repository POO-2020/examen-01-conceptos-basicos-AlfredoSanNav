export default class Huesped{
    /**
     * 
     * @param {*} nombre Nombre completo del huesped.
     * @param {*} genero Genero del huesped.
     */
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }
    getDescripcion(){
        return `${this.nombre} (${this.genero})`
    }
}
/*
let h1 = new Huesped("Alfredo Sánchez Nava", "Masculino")
console.log(h1.getDescripcion()) 
*/