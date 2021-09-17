// crear una clase

class Serie{
    // con este metodo se crean los objetos
    constructor(parametroNombre, parameroTemporadas, parametroCapitulos, parametroGenero){
        // crear las propiedades del objeto
        this.nombre = parametroNombre;
        this.temporada = parameroTemporadas;
        this.capitulos = parametroCapitulos;
        this.genero = parametroGenero;
        this.publicado = false; // propiedad por defecto
    }
    // aqui van nuestros metodos - funcioalidades del objeto
    mostrarDatos(){
        document.write("Serie: "+ this.nombre + " temporadas: "+ this.temporada +"<br>");
    }

    mostrarDatosExtendido(){
        // mostrar todas las propiedades del objeto "" o ``
    }
}

// utilizar la clase o crear o instanciar objetos
let theOffice = new Serie("The Office", 9, 27,"sitcom");
let vikingos = new Serie("Vikings",5,20,"accion");


console.log(theOffice);

theOffice.mostrarDatos();
vikingos.mostrarDatos();










// let serie = {
//     nombre:"the office",
//     tempoadas: 9,
//     genero: "sitcom",
//     capitulos: 27,
// }  