let hello = "Hello World";
hello= "Hello World!!!";
//let : value bisa diubah-ubah
//bisa belum dideklarasikan nilainya
const birthYear = 1990;
//const " value tidak bisa diubah alias konstan"
//harus sekalian dengan nilainya

console.log(hello);
console.log(birthYear);

let namaDepan= "Mark";
let namaBelakang= "Mononutu";

let namaLengkap = namaDepan +" "+ namaBelakang;
console.log(namaLengkap);


//Function

//Function Declaration
function ucapkanSalam(){
    console.log("Selamat sore.. ini menggunakan Function Declaration");
}

ucapkanSalam();

//Function Expression

const ucapkanSalam2 = function(){
    return "Selamat sore. Ini menggunakan function expression";
}

console.log(ucapkanSalam2());