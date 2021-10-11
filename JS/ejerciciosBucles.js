// Ejercicio Nº 1

// let edad = prompt("ingrese edad");
// if(edad >= 18){
//     document.write("puede conducir");
// } else{document.write("el numero no es valido")
// };

//Ejercicio Nº 2
// do{ let nota = prompt("ingrese una nota de 0 a 10");

//     if(nota <= 2){
//     alert("Muy deficiente");
// } else if(nota = 3&&4){
//     alert("insuficiente");
// } else if(nota = 5&&6){
//     alert("suficiente");
// } else if(nota = 7){
//     alert("bien");
// } else if(nota = 8&&9){
//     alert("muy bien");
// } else if(nota = 10){
//     alert("sobresaliente");
// } else if(nota > 10){alert("introduce un numero valido")
// }}while(nota > 10)

// Ejercicio Nº 3

// let cadenaText = prompt("ingrese una palabra");
// do{
//     confirm("¿desea continuar?");

// }while(true);
// document.write("-"+cadenaText);

// Esjercicio Nº 4

// let sumaNumero = parseInt(prompt("ingrese un numero"));
// let sumaNumero2 = prompt("ingrese un numero");
// switch(sumaNumero;
// break;
// sumaNumero2;
// alert("valor incorrecto");
// break;
// sumaNumero;
// break;
// confirm= false
// )
// document.write(sumaNumero = resultado);

// Ejercicio Nº 5

// let dni = parseInt(prompt("ingrese su número de DNI"));
// let resto =
//   [0,
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22];
// let letra =
//   ["T",
//   "R",
//   "W",
//   "A",
//   "G",
//   "M",
//   "Y",
//   "F",
//   "P",
//   "D",
//   "X",
//   "B",
//   "N",
//   "J",
//   "Z",
//   "S",
//   "Q",
//   "V",
//   "H",
//   "L",
//   "C",
//   "K",
//   "E"];
// let dividendo = 23;
// let dniCociente = Math.floor(dni / dividendo);
// let dniResto = dni - dividendo * dniCociente;

// console.log(dniCociente);
//  document.write(Math.floor(dniCociente));
//document.write(letra.length);
// document.write(resto.length);
// console.log(dniResto);
// console.log(dniResto);

// do{
//     if(dniResto = (letra[11])){
//        document.write(letra[11]); 
//     }else if(dniResto != (letra[11])){
//        alert(<>"numero incorrecto")
//     }}while(parseInt(prompt("ingrese su número de DNI")));

// Ejercicio Nº 6

// let numero = 1;
// let rep = 0;

// for(let numero = 1; numero <= 30; numero++){
//   for(let repetir = 0; repetir < numero; repetir++)
//   document.write(numero);
//   document.write("<br>");
// };


// // Ejercicio Nº 7  NO RESUELTO debe ser INVERTIDA!!!
// let numero = parseInt(prompt("ingrese un numero menor de 50"));

// for(let numero ; numero >1; numero--){
//   for(let repetir = numero; repetir > numero; repetir--);
//   document.write(numero);
//   document.write("<br>");};


// Ejercicio Nº 8 - VERIFICAR ROTURA DE BUCLE FINAL

// let numeroA = 1;
// let numeroB = parseInt(prompt("ingrese un numero menor 50"));
// let repetir = 0;

// for(let numeroA = 1; numeroA <= numeroB; numeroA++){
//   if(numeroB <= 50){
//     for(let repetir = 0; repetir < numeroA; repetir++)
//   document.write(numeroA);
//   document.write("<br>");
//   }else{
//     alert("no es un numero valido");}}


// Ejercicio Nº  no se alinea numero y texto, tampoco se hace linea

//  for(let numero = 1; numero <= 500; numero++){
//    document.write(numero+"<br>");
//    if(numero %4 == 0){
     
//      document.write("(Múltiplo de 4)"+"<br>");
//    } else if(numero %9 == 0){
//      document.write("(Mùltiplo de 9)"+"<br>");
//    } else{

//    }
//  }  

 // Posible alternativa - no funcionó
// let numero = 1;
//  switch(numero){
//    case (numero = 1, numero <= 500, numero++):
//    document.write(numero+"<br>");

//    break;

//    case (numero %4 == 0):
//    document.write("(Múltiplo de 4)"+"<br>");

//    break;

//    case(numero %9 == 0):
//    document.write("(Mùltiplo de 9)"+"<br>");

//    break;
// }

// Ejercicio Nº 10 - tabla

// let i, j;
// // Number fuerza el ingreso de números
// let filas = Number(prompt("introduce nº de filas")); 
// let columnas = Number(prompt("introduce nº de columnas"));
// let res = filas * columnas; // multiplicar filas por columnas y guarda en res

// document.write("<table border>"); // imprime la tabla
// for(i = 0; i<filas; i++){ //BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
//   document.write("<tr>");  //EN CADA FILA ESCRIBIMOS UN <tr> PARA COMENZAR LA FILA
//   for(j = 0; j<columnas; j++){ //BUCLE DESDE 0 HASTA EL NÚMERO DE COLUMNAS
//     document.write("<td>");  //EN CADA UNA ESCRIBIMOS UN <td> PARA COMENZAR UNA CELDA
//     document.write(res); //LUEGO ESCRIBIMOS EL VALOR DE res
//     res--; //LE RESTAMOS 1 A res
//     document.write("</td>");}  //Y ESCRIBIMOS UN </td> PARA CERRAR LA CELDA
//     document.write("</tr>");//ESCRIBIMOS UN </tr> PORQUE SE TERMINÓ LA FILA
//   }  
//     document.write("</table"); //Y POR ÚLTIMO CERRAMOS LA TABLA CON </table>
  
// Ejercicio Nº 11

let nom1 = prompt("ingrese primer nombre");
let edad1 = Number(prompt("ingrese edad"));
let nom2 = prompt("ingrese segundo nombre");
let edad2 = Number(prompt("ingrese edad"));
let nom3 = prompt("ingrese tercer nombre");
let edad3 = Number(prompt("ingrese edad")); 
let edad = Math.max(edad1, edad2, edad3);

let persona1 = nom1 && edad1;
let persona2 = nom2 && edad2;
let persona3 = nom3 && edad3;


console.log(edad)
// console.log(edad1, edad2, edad3);

do(edad == edad1){
  if(edad1 = persona1){
   document.write()
  }
}

switch()
