const obj = {
    name: 'julian',
    age: 22,
    country: 'CO'
};

let {country, ...all} = obj;
console.log(all);


const obj = {
    name: 'Julian',
    age: 22
}

const obj1 = {
    ...obj,
    country: 'CO'
}
console.log(obj1);

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout( () => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))



const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-02-02');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);