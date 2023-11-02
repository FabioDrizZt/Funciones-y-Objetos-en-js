const frutas = ['manzana', 'banana', 'pera', 'uva']

frutas.forEach((fruta) => console.log(`me gusta comer ${fruta}`))

// ------------------------

const usuarios = [
  { nombre: 'Ana', suscrito: true },
  { nombre: 'Juan', suscrito: false },
  { nombre: 'María', suscrito: true }
]

usuarios.forEach(({ suscrito, nombre }) => {
  if (suscrito) {
    console.log(`${nombre} es un usuario suscrito`)
  } else {
    console.log(`${nombre} no es un usuario suscrito`)
  }
})
