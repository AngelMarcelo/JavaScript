let anime = "Dragon Ball";
let serie2 = "Naruto";
let serie3= "Evangelion 3.0+1"

// crear o inicializar un arreglo es lo mismo
let series = ["Dragon Ball", "Naruto","Evangelion 3.0+1", anime, 15, true];
// crear un areglo vacio 
let temporadas = [];

// cuando quiero acceder a un elemento del arreglo nombrearreglo[posicion]
document.write("Serie: "+ series[3] ); 

// agregar un elemento al final del arreglo (funcionalidad push)
series.push("Loky");
series.push("Breaking bad");

console.log(series[20]);

// para saber la cantidad de elementos que tiene el arreglo usar "length"

console.log(series.length)
console.log(temporadas.length)

let seriesUsuario = prompt("ingrese una serie");
series.push(prompt("ingrese una serie"));
console.log(series.length);

// mostrar todos los elementos de un arreglo
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Sries: "+series[posicion]);
}

// modificar un elemento del arreglo
series[4] = "The office";

document.write("<br>" );
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Sries: "+series[posicion]);
}

//agregar elemento nuevo en una posicion particular

series.splice(0,0,"One piece");

document.write("<br>" );
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Sries: "+series[posicion]);
}

