// # Ejercicios

// ## Arrays métodos callback

// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array
const numbers = [1,2,3,4,5];

numbers.forEach((number,index) =>{
    console.log(number*index);
});

// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const numbersDivided = numbers.map((number)=>{
    return ((number/numbers.indexOf(number))+1);
})

console.log(numbersDivided);

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const words = ['Beterbiev','Lopes','Volk','Khabib'];

const wordsUpperCase = words.map((word)=> word.toUpperCase());

console.log(wordsUpperCase);

// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen 
// por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con 
// mayúsculas y minúsculas.

const letter = 'o'
const words2 = ['Pereira','Jones','Oliveira','Gaethje ']; 



// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const numbers10 = [1,4,6,4,12,3,2,9,8,6];

const sumArray = numbers10.reduce((acc,number)=> number+acc);
console.log(sumArray);


// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const numbers102 = [1,4,6,4,12,3,2,9,8,6];

const numberSquareCube = numbers102.forEach(number =>{
    console.log(`Número: ${number} - Cuadrado: ${number*number} - Cubo: ${number*number*number}`);
})

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vowels = ['a','e','i','o','u'];
let word = 'cucurucho';
let newword = '';

const da = word.split('').forEach(letter =>{
    if(vowels.includes(letter)){
        newword+=letter.toUpperCase();
    }else{
        newword+=letter;
    }
});

console.log(da);
// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30

const array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
  ];

// - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

// ## Retos!!

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

//   - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

const users = [
    {
    id: "user001",
    name: "Juan",
    surname: "Pérez",
    age: 30
    },
    {
    id: "user002",
    name: "María",
    surname: "González",
    age: 25
    },
    {
    id: "user003",
    name: "Pedro",
    surname: "Sánchez",
    age: 35
    },
    {
    id: "user004",
    name: "Ana",
    surname: "Martínez",
    age: 28
    },
    {
    id: "user005",
    name: "Luis",
    surname: "López",
    age: 40
    }
];