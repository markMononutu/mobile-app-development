//let vs const vs var

//jika pakai var biarpun nama yang sama tetap bisa
//jika pakai var, scope bermasalah untuk blocking

//String literal

// const person ={
//     firstName: "John",
//     lastName: "Doe",
//     age: 33,
//};

//Hallo, nama saya John Doe Umur saya 33 tahun
// let kalimat = "Hallo, nama saya " + person.firstName + " " + person.lastName+ ". Umur saya "+ person.age + " tahun";

// let kalimat2= `Hallo, nama saya ${person.firstName} ${person.lastName}. Umur saya ${person.age} tahun`;

// console.log(kalimat2);

// //Arrow Function
// function sayHello(){

// }

// const sayHello2 = function(){

// }

// const sayHello3 = (param1, param2, param3) => `Hello ${param1} ${param2}`;

// console.log(sayHello3("Mark", "Mononutu"));


//Rest & Spread Operator

const display = (param1,param2,...rest) =>{
    console.log(param1, param2, rest);
};

display(1,2,3);

const arr1= [1,2,3];
const arr2= [4,5,6];
const arr3= [7,8,9];

const arrBaru=[...arr1];



const combineArr =[...arr1, ...arr2, 7, ...arr3];

console.log(arrBaru);

let person = {
    firstName : "Mark",
    lastName : "Mononutu",
    age : 20,
};

person = {
    ...person,
    address: "Manado",
    job: "Student",
}

console.log(person);