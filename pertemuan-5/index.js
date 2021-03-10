// let scores=[90, 85, 70];
// let arrJohn = ['John', 'Doe', 33, true, scores];
// //console.log(arrJohn[1], arrJohn[2]);
// // console.log(arrJohn);

// let objJohn = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 33,
//     isMarried: true,
//     scores: [100, 90,85],
//     sayHello: function(){
//         console.log("Hello");
//     },
//     address:{
//         street: 'Jl. Arnold Mononutu',
//         city: 'Minahasa Utara',
//         province: 'Sulawesi Utara',
//         postCode: "95371",
//     }
// };

// console.log(objJohn.lastName); //dot notation
// console.log(objJohn['age']); //bracket notation
// console.log(objJohn.sayHello());
// console.log(objJohn.scores[0]);
// console.log(objJohn.address.province);

let users = [
    {
        fullName: 'John Doe',
        age: 33,
        address: 'Manado'
    },
    {
        fullName: 'Stenly Adam',
        age: 30,
        adress: 'Minahasa Utara'
    },
    {
        fullName: 'Jane Smith',
        age: 25,
        address: 'Manado'
    }

]

let listUsers = users.map(function(user){
    return user.fullName;
});

console.log("Daftar users", listUsers);

//pengolahan konvensional
//let numbers= [1, 2, 3, 4, 5];
// for (i=0;i<numbers.length; i++){
//     console.log(numbers[i]);
// }

//Array built-in method

//forEach
// numbers.forEach(function(item,index, array){
//     item *= 2;
//     console.log(item);
// })


//Map
// let output= numbers.map(function(item){
//     return item *=2;
// })
// console.log("Array Numbers: ", numbers);
// console.log("Array output:", output);

//filter
let filteredUsers = users.filter(function(user){
    return user.address === "Manado";
})
console.log("filtered users:", filteredUsers);

//find (hanya satu saja yang dikembalikan)
let findUsers = users.find(function(user){
    return user.address === "Manado";
})
console.log("Find User: ", findUsers);