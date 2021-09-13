let mostrarObjeto = () =>{
    // obtener todas las claves de un objeto como si fuera un arreglo
    let claves = Object.keys(serieParametro);
    console.log(claves) //["nombre",......]
    for(let i=0; i < claves.length; i ++){
        document.write(`<br> ${claves[i]}: ${serieParametro[claves[i]]}`)
        document.write(``<br>)

    }
}

// let nomnbre ="the offfice";
// let temporadas= 9;
// let genero = "sitcom";
// let capitulos = 7;

// crear un objeto con notacion literal

let serie = {
    nombre:"the office",
    tempoadas: 9,
    genero: "sitcom",
    capitulos: 27,
}  

// mostrar una propiedad de un objeto
document.write(`serie: ${serie.nombre}`);
document.write(`<br>Capitulos: ${serie.capitulos}`);
// mostrar una propiedad de un objeto metodo 2
document.write(`<br>Temporadas: ${serie["temporadas"]}`);
console.log(serie);

// modificar la propiedad de un objeto
//document.write(`<br>Tempordas: ${serie []}`);

// agregar propiedades a un objeto
serie.premios = true;
document.write(`<br>Premios: ${serie.premios}`);

// borrar un elemento
delete serie.genero;
console.log(serie); 

// llamar a la funcion
