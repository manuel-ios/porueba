const nombre =['Carlos', 'Viviana', 'Maria','Dionisio']
console.log(nombre.map(n=>n.length))
console.log(nombre.map(nombre=>nombre.length))
console.log(isNaN('20'))
console.log('isNAN '+ Number.isNaN(20))


let nombres =  'carlos/José/ Sandra/Ana/Rosa'
let aNombre = nombres.split()
console.log(aNombre)
console.log('Arreglo Vacio longitud ='+[,,,].length)
console.log(0.1+0.2 === 0.3)
const number = [1,2,3,4,5]
console.log(number.at(-2))
console.log((('o__o').padStart(10,'-') ).padEnd(15,'-'))

let letras =  ['Lambda', 'Alfa', 'Gamma', 'Beta']
console.log(letras.sort())

function foo(){
    return 5
}
let myvar= foo()
console.log(myvar)
let transporte =  ['Avión', 'Barco','Moticicleta', 'Automóvil']
console.log(transporte.shift())
console.log(transporte.pop())
console.log(transporte.unshift("Caballo"))
console.log(transporte.push('burro'))
console.log(transporte)

function myFuntion(){
    const  nombre = 'pedro'
    nombre =  'juan'
    return nombre
}
//console.log(myFuntion())

var square = number => {number * number};
console.log(square)
console.log(null)

var array = ["w","o","r","l","d"]
console.log(array.indexOf("o"))
let mascotas =  ["perro", "gato", "Loro","canario" ]
let mas = mascotas.map(mascotas => mascotas.length >=4)
console.log(mascotas)
console.log(mas)
let messege = "Nombre"
console.log(typeof(messege))