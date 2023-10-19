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

let objetoProducto = { precio: 87000, porcentajeDeDescuento: 0.2}
// nuevoAmigo = "Gabriel"
// let Narray = []
// Narray = objetoUsuario.amigos 
// Narray.push("nuevoAmigo")
objetoProducto.calcularPrecioDescuento = objetoProducto.precio - (objetoProducto.precio*objetoProducto.porcentajeDeDescuento)
objetoProducto.calcularPrecioDescuento = objetoProducto["Precio Final"]
    console.log (objetoProducto)