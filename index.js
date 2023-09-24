var firstName = "Agis";
const middleName = "Satria";
let lastName = "Mandala";

console.log(firstName + " " + middleName + " " + lastName);

//variable, konstanta, konditional if else dan swith case

let nilai = 90;

if (nilai >= 90) {
  console.log("Nilai : A");
} else if (nilai >= 80 && nilai < 90) {
  console.log("Nilai : B");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Nilai : C");
} else {
  console.log("Nilei: D");
}

switch (nilai) {
  case 90:
    console.log("Nilai : A");
    break;
  case 80:
    console.log("Nilai : B");
    break;
  case 70:
    console.log("Nilai : C");
    break;
  case 60:
    console.log("Nilai : D");
    break;

  default:
    break;
}

//Uji Coba Library
let text = require("lodash");

console.log(text.camelCase("agis satria mandala"));

//Array, Object, Looping dan Fungsi

let arrayAbsen = ["Agis", "Satria", "Mandala"];

function print(parameter) {
  for (const name of parameter) {
    console.log(name);
  }
}

print(arrayAbsen);

const mahasiswa = {
  firstName: "Agis",
  middleName: "Satria",
  lastName: "Mandala",
};

console.log(mahasiswa);
