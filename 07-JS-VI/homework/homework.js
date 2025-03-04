// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
 return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb(invocarCallback);
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
    return cb(n1, n2);
}
function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //Esta manera es la Imperatiova o Literal
 // var numeros=[1,2,3,4,5];
  //suma = 0;
//  for (var i = 0; i < 5;i++){
  //  suma = suma + numeros[i]
//}
//cb(suma);
//Esta es la manera con callbacks
var sumaTotal = numeros.reduce(function(acc, curr) {
  return acc + curr;
},0);
cb(sumaTotal);

}


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //Esta es la forma imperativa de Iterar e invocar el callback
  //  for(var i = 0; i < array.length; i++) {
  //  cb(array[i]);
  //}
  //Esta es la Forma con el bucle forEach
  array.forEach(function(ele,index){
    return cb(ele);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var array2 = array.map(function(elemento){
    return cb(elemento);
})
return array2;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
 var array2= array.filter(array=>array.charAt(0) === 'a');
  return array2;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
