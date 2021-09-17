//Persona-> nombre, apellido, dni, usuario, pass, comision
//Alumno-> nombre, apellido, dni, usuario, pass, comision, curso, legajo,
//Tutor-> nombre, apellido, dni, usuario, pass, comision, id, antiguedad

class Persona {
  constructor(
    paramNombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision
  ) {
    this.nombre = paramNombre;
    this.apellido = paramApellido;
    this.dni = paramDni;
    this.usuario = paramUsuario;
    this.pass = paramPass;
    this.comision = paramComision;
  }

  mostrarDatos() {
    // document.write("nombre:"+this.nombre+...this.)  Opcion 1
    document.write(`Nombre: ${this.nombre}
   <br>Apellido: ${this.apellido}
   <br>Dni: ${this.dni}
   <br>usuario: ${this.usuario}
   <br>pass: ${this.pass}
   <br>comision ${this.comision}`);
  }

  mostrarNombreCompleto() {
    document.write(`Nombre: ${this.nombre} Apellido: ${this.apellido}`);
  }

  // propiedades conmutadas (esto se refiere a un unico valor de estas propiedades) getters y setters
  // encapsulacion: este metodo se utiliza para tener seguridad para que nadie pueda modificar los datos del objeto
  get mostarUsuario() {
    return this.usuario;
  }

  get mostrarComision() {
    return this.comision;
  }

  set modificarDni(nuevoDni) {
    this.dni = nuevoDni;
  }

  set modificarComision(nuevaComision) {
    this.comision = nuevaComision;
  }

  set modificarDni(nuevoDni) {
    this.dni = nuevoDni;
  }
}

class Alumno extends Persona {
  constructor(paramNombre,
    paramApellido,
    paramDni,
    paramUsuario,
    paramPass,
    paramComision, paramLegajo, paramCurso){
        super(paramNombre,
            paramApellido,
            paramDni,
            paramUsuario,
            paramPass,
            paramComision);
            this.legajo = paramLegajo;
            this.curso = paramCurso;
    }
    
    mostrarDatos(){
        document.write(`<br><br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>Dni: ${this.dni}
        <br>usuario: ${this.usuario}
        <br>pass: ${this.pass}
        <br>comision ${this.comision}
        <br>legajo: ${this.legajo}
        <br>curso: ${this.curso}`);
    }
}

let lily = new Persona("lili", "Cerda", 33444555, "lcerda", "hdfgfh23", "17i");
lily.mostrarDatos();

document.write("<br>El usuario: " + lily.mostarUsuario);

// usar el setter
let otroDni = 35467666;

lily.modificarDni = otroDni;
lily.mostrarDatos();

let jonathan = new Alumno("Jonathan","Singh",3344466,"jsingh","shdjk22","17i",1234,"Fullstack");

jonathan.mostrarDatos();
