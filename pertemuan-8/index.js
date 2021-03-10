//Destrukturisasi

//Array (Caranya, Ambil sebagian item, Deklarasi & Assignment terpisah, Default value, Rest Operator)

//const arrPerson = ['John', 'Doe', 33, true, 'Manado'];


/*
//Cara Lama
const firstName = arrPerson[0];
const lastName = arrPerson[1];
const age = arrPerson[2];
const isMarried = arrPerson[3];
*/

// let [firstName, , age, ...rest] = arrPerson;

// console.log(firstName, age);
// console.log(rest);

//Object (Caranya, Ambil item, Deklarasi & Assignment terpisah, Default value, Rest operator, Penerapan )
//let firstName, lastName;

const objPerson = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    isMarried: true,
};

/*
//Cara lama
const firstName = objPerson.firstName;
const lasstName = objPerson.lastName;
const age = objPerson.age;
const isMarried = objPerson.isMarried;

console.log(firstName, lastName, age, isMarried)

*/

// const {firstName, lastName, age, isMarried} = objPerson;  //untuk object harus sama dengan nama properties atau rename = namaLama : namaBaru
 
// console.log (firstName, lastName, age, isMarried);

// ({firstName, lastName, address='Manado'} = objPerson);

// console.log(firstName, lastName, address);

const display = ({firstName, age}) => `Hallo nama saya ${firstName} ${age}`;

console.log(display(objPerson));
