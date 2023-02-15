let nombre = prompt ("Ingrese su Nombre");
console.log(nombre);

    alert (`Bienvenido a TodoMuebles ${nombre}`);


const productos = [
    {nombre: "armario", precio: 20000},
    {nombre: "mueble sala", precio: 30000},
    {nombre: "sillon", precio: 10000},
    {nombre: "mesa y sillas", precio: 50000},
];

let carrito = []

let seleccion = prompt ("¿Desea comprar algun mueble?. Responda si/no?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt ("¿Hola desea comprar algun mueble?. Responda si/no")
}

if (seleccion == "si"){
    alert("A continuacion nuestra lista de productos.")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}else if (seleccion == "no"){
    alert(`Gracias por visitarnos ${nombre}, hasta la proxima!.`)
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

if(producto == "armario" || producto == "mueble sala" || producto == "sillon" || producto == "mesa y sillas"){
    switch(producto){
        case "armario":
        precio = 20000;
        break
        case "mueble sala":
        precio = 30000;
        break
        case "sillon":
        precio = 10000;
        break
        case "mesa y sillas":
        precio = 50000;
        break
    }

    let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))
    carrito.push({producto, unidades, precio})
}else{
    alert("No tenemos ese producto")
}

seleccion = prompt ("¿Desea seguir comprando. Responda si/no?")
while(seleccion == "no"){
    alert("Gracias por su compra. Hasta pronto")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades}, precio final ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`El total a pagar es: ${total}`)

let mueble = ["armario", "mueble sala", "sillon", "mesa y sillas"]

let explicacion = prompt ("Quiere informarse de nuestros muebles?. Responda si/no")
    if (explicacion =="si") {
        alert(`Nuestros muebles ${mueble[0]} y ${mueble[2]} estan hechos con madera de pino, mientras que nuestros muebles ${mueble[1]} y ${mueble[3]} estan hechos con madera de roble`)
    }else{
        alert("Gracias por su visita")
    }












