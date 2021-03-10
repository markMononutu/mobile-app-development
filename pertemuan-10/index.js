//Asyncronous JavScript

// console.log("Satu");
// console.log("Dua"); //syncronous JavaScript
// console.log("Tiga");

//Callback
// function greetings(fullName) {
//   console.log(`Hi ${fullName}`);
// }

// function introduction(firstName, lastName, callback) {
//   const fullName = `${firstName} ${lastName}`;
//   callback(fullName);
// }

// introduction("John", "Doe", greetings);

// console.log("Satu");
// setTimeout(() => {
//   console.log("Dua");
// }, 2000);

// console.log("Tiga");

// function proses1() {
//   console.log("Proses 1 selesai dijalankan");
// }

// function proses2(callback) {
//   setTimeout(() => {
//     console.log("Proses 2 selesai dijalankan");
//     callback();
//   }, 2000);
// }

// function proses3() {
//   console.log("Proses 3 selesai dijalankan");
// }

// proses1();
// proses2(proses3);

// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//     }, 2000);
//   }, 2000);
// }, 2000);

// let condition = false;

// let newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Error");
//   }
// });

// newPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function getIDStudent() {
//   return new Promise((resolve, reject) => {
//     resolve("12345");
//   });
// }

// function getNameById(id) {
//   return new Promise((resolve, reject) => {
//     if (id === "12345") {
//       resolve("John Doe");
//     } else {
//       reject("Unknown ID Student");
//     }
//   });
// }

// getIDStudent()
//   .then((id) => {
//     return getNameById(id);
//   })
//   .then((name) => {
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const getNameByIdAsync = async () => {
//   try {
//     const id = await getIDStudent();
//     const name = await getNameById(id);
//     console.log(name);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getNameByIdAsync();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

const getDataFromJSONPlaceholder = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  console.log(json);
};
getDataFromJSONPlaceholder();
