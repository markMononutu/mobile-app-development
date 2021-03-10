// Array
    //Array literal (kurung siku)
let numbers = [1, 2, 3, 4, 5];

let john = ['John', 'Doe', 33, true];

console.log(numbers);

    //keyword new array
let john2 = new Array ("John", "Doe", 33, true);

   //merubah isi
john[3]=false;

console.log(john);


    //mengakses elemen terakhir
console.log(john[john.length-1]);


//Object
    //Object literals
const john3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    isMarried: true,
}

console.log (john3);

    //keyword new object
const john4 = new Object();
john4.firstName="John";
john4.lastName="Doe";
john4.age= 33;
john4.isMarried = true;

console.log(john4);


    //mengakses properti dari object
        //dot notation
console.log(john4.lastName);
        //bracket notation
console.log(john4["isMarried"]);

    //menambah properti baru pada objek
        //dot notation
john3.address= "Tomohon";
        //bracket notation
john3["nationality"]= "Indonesian";

    //object method 
    const john5 = {
        firstName: 'John',
        lastName: 'Doe',
        age: 33,
        isMarried: true,
        sayHello: function(){
            console.log("Hello");
        }
    }
delete john5.age;

console.log(john5);
john5.sayHello(); 