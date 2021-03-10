/*Mononutu, Mark Jibril
  Mobile Application Development - A
  Exercise#2
*/

//1 Callback

//a
const mandi = () => console.log("Mandi");

//b
const sarapan = (callback) => {
  setTimeout(() => {
    console.log("Sarapan tertunda 3 detik");
    callback();
  }, 3000);
};

//c
const berangkatSekolah = () => {
  console.log("Berangkat Sekolah");
};

//d
// mandi();
// sarapan();
// berangkatSekolah();

// e & f
mandi();
sarapan(berangkatSekolah);

// 2. Promise
// a
const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
};

//b
const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};

//c
messages();

//3.
const ambilDataUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => console.log(users));
};

ambilDataUser();
