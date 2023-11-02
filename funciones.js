function sumarDeclarada (a = 0, b = 0) {
  const suma = a + b
  return suma
}
const sumaExpresada = function (a, b) {
  const suma = a + b
  return suma
}
const sumaArrow = (a, b) => a + b

const sumaArrowMultiplesLineas = (a, b) => {
  const suma = a + b
  return suma
}

console.log(sumarDeclarada(5, 4))
console.log(sumaExpresada(5, 4))
console.log(sumaArrow(5, 4))
console.log(sumaArrowMultiplesLineas(5, 4))

function saludar (nombre, apellido) {
  // return 'Hola ' + nombre + ' ' + apellido;
  return `Hola ${nombre} ${apellido}`
}

console.log(saludar('Robertito', 'Rodríguez'))
