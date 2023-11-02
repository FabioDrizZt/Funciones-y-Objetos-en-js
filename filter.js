const numeros = [1, 2, 3, 4, 5, 6]

const pares = numeros.filter(numero => numero % 2 === 0)

console.table(pares)

// ----------------------------------------------

const productos = [
  { nombre: 'Camiseta', precio: 20 },
  { nombre: 'Pantalón', precio: 50 },
  { nombre: 'Zapatos', precio: 80 },
  { nombre: 'Sombrero', precio: 25 }
]

const productosCaros = productos.filter(producto => producto.precio > 30)
console.table(productosCaros)
