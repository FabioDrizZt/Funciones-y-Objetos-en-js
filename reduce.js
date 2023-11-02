const numeros = [1, 2, 3, 4, 5]

const sumaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero)

console.log(sumaNumeros / numeros.length)

// -----------------------------------

const ventas = [
  { producto: 'Camiseta', cantidad: 5, precio: 20 }, // 100
  { producto: 'Pantalón', cantidad: 2, precio: 50 }, // 100
  { producto: 'Zapatos', cantidad: 3, precio: 80 } // 240
]

// const totalVentas = ventas.reduce((total, venta) => total + venta.precio * venta.cantidad, 0)
const totalVentas = ventas.reduce((total, { precio, cantidad }) => total + precio * cantidad, 0)

console.log(totalVentas)
