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


// invocar o llamar a una funcion
aumentarPrecio();

let coeficienteInflacion= parseInt(prompt("ingrese el monto total de la inflacion del mes"))

actualizarPrecio(coeficienteInflacion, "teclado hyperx ",9000);
actualizarPrecio(coeficienteInflacion, "teclado logitec ",14000);
actualizarPrecio("mouse logitec ",9000, 100);