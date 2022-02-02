function newFunction(name, age, country) {
    var name = name || 'Julian';
    var age = age || 22;
    var country = country || ' CO';
    console.log(name, age, country);
};

//es6
function newFunction2(name = 'julian', age = 22, country = 'CO') {
    console.log(name, age, country);
};


newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);  

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "En el mes de febrero acabaré la escuela de JavaScript \n"
+ "otra frase epica que necesitamos.";

//es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name1': 'julian',
    'age': 22,
    'country': 'CO' 
}

console.log(person.name1, person.age);

let { name1}  = person;
console.log(name1);

let team1 = ['Julian', 'Oscar', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);


var a = 'b';
a = 'a';
console.log(a);

let name3 = 'Julian';
let age3 = 22;
//es5
obj = {name3: name3, age3: age3};
//es6
obj2 = {name3, age3 };
console.log(obj2);

const names = [
    {name4: 'Julian', age4:32},
    {name4: 'Yesica', age4: 27}
]

let listOfNames = names.map(function(item){
    console.log(item.name4);
})


let listOfNames2 = names.map(item => console.log(item.name4));

// const listOfName3 = (name5, age5, country) => {
//     ...
// }   
// const listOfNames4 = name => {
//     ...
// }

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hey!')
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(error => console.log(error));


class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

const hello = require('./module')
// import {hello} from './module';

// hello();
console.log(hello())

function* helloworld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'world';
    }
};


const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);