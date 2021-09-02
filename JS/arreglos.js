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
    document.write("<br>Series: "+series[posicion]);
}

// modificar un elemento del arreglo
series[4] = "The office";

document.write("<br>" );
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Series: "+series[posicion]);
}

//agregar elemento nuevo en una posicion particular

series.splice(0,0,"One piece");
//splice(posicion, elementos a borrar a partir de la posicion anterior, elemento a agregar en el arreglo)

mostrarSeries();

// eliminar elementos de un arreglo
series.splice(7,1);
//splice (para borrar un elemento)
mostrarSeries();

//eliminar todos los elementos a partir de tal posicion

series.splice(3); // borro desde la posicion 3
series.splice(0,1);

mostrarSeries();

// crar funcion que muestre los elementos del arreglo
function mostrarSeries(){
document.write("<br>");
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>Series: "+series[posicion]);
}
}