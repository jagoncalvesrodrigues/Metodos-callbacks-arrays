const numbers = [1,2,3,4,5,6];
const letters = ['A','E','I','O','U'];

for(const number of numbers){
    console.log(number);
}

//callbacks son funciones que son ejecutadas por otra funcion

//FOREACH
numbers.forEach(number => {
    const double= number*2;
    console.log(double);
})

//MAP
const lettersLower = letters.map(letter =>{
    return letter.toLowerCase();
})
console.log(lettersLower);

//FILTER
const numbers2 = [1,2,3,4,5,6];
const onlyEven = numbers2.filter(number => number % 3 === 0);
console.log(onlyEven);

//EVERY
const higherThan4 = numbers.every(number=> number > 4); 
//esto es lo mismo
// const higherThan4 = number.every(number=>{
//     return number > 4;
// }) 

//SOME 
const anyNumberHigherThan4 = numbers.some(number=>number>4);

//FIND FINDINDEX
const users = [
    {
        id:1,
        name:'Juan'
    },
    {
        id:2,
        name:'Dani'
    }
]
const foundUser = users.find(user=>user.id===1);
const foundUserIndex = users.findIndex(user=>user.id===1);
console.log(foundUser);
console.log(foundUserIndex);


//SORT (Ordena el array)

const numbers3 = [2,5,8,3,1,4];
//recibe dos parametros a y b la mayoria de las veces
//mayor a menor sera b-a
numbers3.sort((a,b)=> a-b);
console.log(numbers3);

const names = ['Juan','parti','amanda','Adrian'];
//al reves seria b.localeCompare(a)
names.sort((a,b)=> a.localeCompare(b));
console.log(names);


//REDUCE
//hacer una operacion entre todos los elementos de un array
const numbers5 = [2,5,8,3,1,4];

const total = numbers5.reduce((acc,number) => number + acc);
console.log(total);

const wordToReduce = 'Ordenador';
console.log(wordToReduce.split(''));

const word = wordToReduce.split('').reduce((acc, letter) => acc + letter.toUpperCase());
console.log(word);

