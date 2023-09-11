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
