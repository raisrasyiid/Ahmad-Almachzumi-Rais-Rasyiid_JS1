//Percabangan If Else
let number = prompt('IF ELSE. Masukan bilangan : (ganjil/genap)')
if (number % 2 != 0) {
    alert('Angka ganjil')
}else{
    alert('Angka genap')
}


//Percabangan Nested (IF, Else If, Else)
let angka = prompt('NESTED IF. Masukkan nilai yang mau anda inputkan (0-100) : ')
if (angka >= 90) {
   alert('Anda mendapatkan nilai A');
}else if (angka >= 80) {
   alert('Anda mendapatkan nilai B');
}else if(angka >= 70){
   alert('Anda mendapatkan nilai C');
}else if(angka >= 60) {
   alert('Anda mendapatkan nilai D');
}else{
   alert('Anda mendapatkan nilai E');
}

//Switch Case
alert('SWITCH CASE. Silahkan liat di console')
console.log(" Di bawah ini Percabangan switch case");
let kelas = "sore"
switch (kelas) {
    case "pagi":
        console.log("Jadwal pagi. Silahkan anda masuk kelas jam 09.00-12.00");
        break;
    case "siang":
        console.log("Jadwal siang. Silahkan anda masuk kelas jam 12.00-15.00");
        break;
    case "sore":
        console.log("Jadwal sore. Silahkan anda masuk kelas jam 15.00-17.00");
        break;
    default: 
    console.log("anda tidak masuk kelas");
        break;
}

//FOR STATEMENT
alert('FOR STATMENT. Silahkan liat di console')
let i = 0;
console.log("Di bawah ini Perulangan bilangan genap");
for (let i = 0; i <=10; i+=2) {
    console.log(i + " adalah bilangan genap");
}

//While dan do while
alert('WHILE & DO WHILE. Silahkan liat di console')
let j = 0;
console.log("Di bawah ini adalah perulangan While");
while(j <=10){
    console.log("looping ke " + j);
    j++;
}

console.log("Di bawah ini adalah perulangan Do While");
let k = 0;
do {
    k ++;
   console.log(k + " aku sayang kamu");
}
while (k <= 5);

//Function
alert('FUNCTION. Silahkan liat di console')
console.log("Di bawah ini Ini Fuction perhitungan luas persegi");
function luasPersegi(a,b) {
    return a*b
}
console.log("hasil perhitungan luas persegi panjang dengan sisi 2 dan 4 adalah : "+luasPersegi(2,4));











