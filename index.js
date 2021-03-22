//EXERCISE PROGRAM SESI 7, 16 MARET 2021 (ARRAY)

//!-- Exercise 1 --!
let pekerjaan = ['Software Developer', 'Web Developer', 'System Analyst', 'UI/UX Designer', 'IT Support'];
console.log(pekerjaan);

document.write ("<h3>Pekerjaan Dibidang IT :</h3>");
document.write ("<ol>");
for(let i = 0; i < pekerjaan.length; i++){
    document.write(`<li>${ pekerjaan [i]}</li>`);
}
document.write("</ol>");

//!-- Exercise 2 --!
const tim = [
    'Ade Kurniawati - Leader',
    'Ai Shanti Sugianty - Anggota',
    'Alvito Barimansyah - Anggota',
    'Aminah - Leader',
    'Arsita Nurfauziah - Anggota',
    'Ayu Diah Sindri - Anggota',
];
  
const tim1 = tim.slice(0, 5);
const tim2 = tim.slice(3);
  
console.log(`${tim1[0]}, ${tim1[1]}, ${tim1[2]}`);
console.log(`${tim2[0]}, ${tim2[1]}, ${tim2[2]}`);

document.write(`${tim1[0]}, ${tim1[1]}, ${tim1[2]} <br>`);
document.write(`${tim2[0]}, ${tim2[1]}, ${tim2[2]}`);

//!-- Exercise 3 --!
  let Array = [3, 5, 7, 9, 11];
newArray = Array.map((num, index)=>{
    return Array[index]=num*5;
});
console.log(newArray);

//!-- Exercise 4 --!
const array1 = [
    'Math',
    'English',
    'Programming' // nilai yang sama
];
  
const array2 = [
    'Geography',
    'Spanish',
    'Programming' // nilai yang sama
];
  
const arrayPertama = [
    'Math',
    'English',
    'Programming' // nilai yang sama
  ];
  
  const arrayKedua = [
    'Geography',
    'Spanish',
    'Programming' // nilai yang sama
  ];
  
  function CekNilaiYangSamaDariDuaArray(arrayPertama, arrayKedua) {
    // array1.forEach atau array1.map
    array1.forEach((nilaiDalamArray1, posisiNilaiDalamArray1) => {
      console.log(`Nilai ${nilaiDalamArray1} ada di posisi ${posisiNilaiDalamArray1}`);
  
      const nilaiDalamArray2 = arrayKedua[posisiNilaiDalamArray1];
      console.log(`Nilai dalam array kedua ${nilaiDalamArray2}`);
  
      if (nilaiDalamArray1 === nilaiDalamArray2) {
        console.log(true);
      } else {
        console.log(false);
      }
    });
  };

  CekNilaiYangSamaDariDuaArray(arrayPertama, arrayKedua);