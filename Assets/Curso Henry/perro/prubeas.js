// myObj = new Object()
// str = "myString"
// rand =Math.random()
// obj = Object()
// cas = "caballo"
// myObj.type = "Sintaxis de puntos"
// myObj["fecha de creación"] = "cadena con espacios"
// myObj[str] = "valor de cadena"
// myObj[rand] = "numero aleatorio"
// myObj[obj] = "Object"
// myObj[""] = "Incluso una cadena vacia"

// let objetoProducto = { precio: 87000, porcentajeDeDescuento: 0.2}
// // nuevoAmigo = "Gabriel"
// // let Narray = []
// // Narray = objetoUsuario.amigos 
// // Narray.push("nuevoAmigo")
// objetoProducto.calcularPrecioDescuento = objetoProducto.precio - (objetoProducto.precio*objetoProducto.porcentajeDeDescuento)
//     console.log (objetoProducto)
// function Usuario (usuario, nombre, email, password) {
//     this.usuario = usuario 
//     this.nombre = nombre
//     this.email = email  
//     this.password = password 
//     this.saludar = function (){ return "Hola, mi nombre es " + this.nombre}
      
//  }
//  var instancia = new Usuario("carmelo", "cristian", "email", "carlitos")

// console.log(instancia.saludar())
// String.prototype.reverse = function (){
//     this.split("")
//     let l = this.split("").length -1
//     let cadenaInvertida = []
//     for (let i = 0; i<=this.split("").length; i++){    
//        cadenaInvertida[i] = this.split("")[l] 
//        l--
//     }
//     return cadenaInvertida.join("")
//  }
// var prueba = "hola esta es una prueba mucho mas larga para ver el largo de mi pito"
// console.log(prueba.reverse())
// class Persona {
//     // Crea el constructor de la clase "Persona".
//     // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
//     // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
//     // sus valores.
//     constructor (nombre, apellido, edad, domicilio) {
//        this.nombre = nombre
//        this.apellido = apellido
//        this.edad = edad 
//        this.domicilio = domicilio
//     }
//     detalle (){
//        let propiedades = {nombre: this.nombre, apellido: this.apellido, edad: this.edad, domicilio: this.domicilio  }
//        return propiedades
//     }
    
//  }
// Persona.prototype.datos = function (){
//     return (this.nombre + ", " + this.edad + " años")
//  }
//  let prueba = new Persona("carlos", "camelo", 22, "sapo")
//  console.log (prueba.datos())
let nombre = "carlos"
let explout = nombre.split("")
explout[0] = explout[0].toUpperCase()  
console.log(explout.join(""))