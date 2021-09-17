//document.write("Elemento 1 <br>");
//document.write("Elemento 2 <br>");
//document.write("Elemento 3 <br>");
//document.write("Elemento 4 <br>");
//document.write("Elemento 5 <br>");
//document.write("Elemento 6 <br>");
//document.write("Elemento 7 <br>");
//document.write("Elemento 8 <br>");

//while

/*
while(condicion){
    codigo a ejecutar si se cumple la condicion
    cambiar condicion
}
*/
let contador =1;
while(contador <=100){
    document.write("Elemento "+contador+"<br>");
    contador++ 
    // operador unitario permite sumar de uno en uno
}


let contador = 1000;

while(contador<=100){
    document.write("Elemento "+contador +"<br>");
    //contador++
    contador = contador +2;
    //operador +2 permite sumar de dos en dos
}


// estructura do-while .... hacer (mientras se cumple la condicion)
/*
do{
    codigo a ejecutar
}while(condicion)
*/

let elemento =1;

do{
    document.write("Elemento do-while "+elemento+"<br>");
    elemento++;
}while(elemento <=100)

// Estructura for es un resumen del while pero en una sola linea
/* 
for(crear variable; condicion; incremento o decremento el valor de la variable){
    codigo a ejecutar
}
*/

for (let i= 1; i<= 100; i++){
    document.write("elemento for "+i+"<br>");
}


