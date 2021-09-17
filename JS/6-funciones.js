// funciones

// funciones sin parametros
function aumentarPrecio(){
    console.log("prueba"); //para verificar si funciona el codigo de la funcion
    let disney= 385;
    let inflacion= 150;
    document.write("valor total del servicio disney plus $"+ (disney + inflacion));
};

// funcion con parametros
function  actualizarPrecio(monto, producto, precio){
 let calculo= precio + monto;
 document.write("<br>El producto: "+producto+" precio total $"+ calculo)
} 

// funcione que retornan un valor
// function convertirDolaresPesos(precioDolar){
//     let total = precioDolar * 184;
//     return total;
    // jamas escribimos en esta zona, la linea return es la ultima que se ejecuta
//}

// funciones con forma de flecha
let convertirDolaresPesos = (precioDolar) => {
    let total = precioDolar * 184;
    return total;
}

convertirDolaresPesos(200);

// invocar o llamar a una funcion
aumentarPrecio();

//let coeficienteInflacion= parseInt(prompt("ingrese el monto total de la inflacion del mes"))

// actualizarPrecio(coeficienteInflacion, "teclado hyperx ",9000);
// actualizarPrecio(coeficienteInflacion, "teclado logitec ",14000);
// actualizarPrecio("mouse logitec ",9000, 100);

//console.log(convertirDolaresPesos(1200));


let dolarBlue =parseInt(prompt("Ingrese el valor del dolar blue a la flecha"));
let iphone = convertirDolaresPesos(1200);


document.write("<br> Producto Iphone - precio $" + iphone+ "(producto nuevo)"); // opcion 1
document.write(`<br> Producto Iphone - precio $ ${iphone} (producto nuevo)`);  // opcion 2 

document.write("<br> Producto PS5 - precio $" + convertirDolaresPesos(500)+ "(ultima version)");