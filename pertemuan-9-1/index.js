const student = {
  fullName: "John",
  address: "Manado",
  age: 25,
};

const displayStudentInformation = ({ fullName, address }) => {
  console.log(`Student name: ${fullName}, Adress: ${address}`);
};

displayStudentInformation(student);
