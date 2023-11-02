const numeros = [1, 2, 3, 4, 5]

// const duplicados = numeros.map(function (nro) { return nro * 2 })
const duplicados = numeros.map((nro) => nro * 2)
const triplicados = numeros.map((nro) => nro * 3)

console.log(duplicados)
console.log(triplicados)

const nombres = ['Juan', 'Maria', 'Carlos']
const nombresConSaludo = nombres.map((nombre) => `Hola ${nombre} `)

console.log(nombresConSaludo)
