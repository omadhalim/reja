// Task-E

function getReverse(car) {
  let teskari = car.split("").reverse().join("");
  return teskari;
}

console.log(getReverse("damas"));





// Task-D

// function checkContent(a,b) {
//   const first = 
//   a.split("").sort().join("");
//   const second =
//   b.split("").sort().join("");

//   return first === second;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));



// Task-C
//  class Shop {

//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     let vaqt = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit"
//     });

//     console.log(
//       `Hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`
//     );
//   }

//   sotish(mahsulot, soni) {
//     this[mahsulot] -= soni;

//     let vaqt = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit"
//     });

//     console.log(`${vaqt}da ${soni}ta ${mahsulot} sotildi`);
//   }

//   qabul(mahsulot, soni) {
//     this[mahsulot] += soni;

//     let vaqt = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit"
//     });

//     console.log(`${vaqt}da ${soni}ta ${mahsulot} qabul qilindi`);
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();

// shop.sotish("non", 3);

// shop.qabul("cola", 4);

// shop.qoldiq();






// Task-B
// function countDigits(str) {
//   const matches = str.match(/\d/g);
  
//   return matches ? matches.length : 0;
// }


// console.log(countDigits("ad2a54y79wet0s8j7f65fgb9")); 
// console.log(countDigits("Assalomu Aleykum"));             















// // Task-A 

// function countLetter (letter, word) {
//   let count = 0;
//   for (let a = 0; a <word.length; a++) {
//     if (word[a] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("a",
//   "alibaba"
// ));



// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "o'zingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 50-60
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q endi", // 60
// ];


// function maslahatBering(a,callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null,list[0]);
//  else if (a> 20 && a <=30) callback(null, list[1]);
//  else if (a> 30 && a <=40) callback(null, list[2]);
//  else if (a> 40 && a <=50) callback(null, list[3]);
//  else if (a> 50 && a <=60) callback(null, list[4]);
//  else {
//   setTimeout(function () {
//     callback(null, list[5]);
//   }, 10000);

//   callback(null, list[5]);
//  }
// } 
// console.log("passed here 0");
// maslahatBering(20, (err,data) => {
//   if(err) console.log('ERROR:', err);
//   console.log('javob:',data);
// })
// console.log("passed here 1");

/// =-============================2-QISM=====================================================================//

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "o'zingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 50-60
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q endi", // 60
// ];


//  async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error ("insert a number");
//   else if (a <= 20) return list[0];
//  else if (a> 20 && a <=30) return list[1];
//  else if (a> 30 && a <=40) return list[2];
//  else if (a> 40 && a <=50) return list[3];
//  else if (a> 50 && a <=60) return list[4];
//  else {
//      return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve(list[5]);

//       },5000);
//      });888O
  
//   setTimeout(function () {
//     return list[5];
//   }, 5000);
//  }
  
// } 
//  then/catch
// console.log("passed here 0");
// maslahatBering(20).then(data => {
//   console.log('javob:',data);
// }).catch(err => {
// console.log("ERROR:, err");
// })
// console.log("passed here 1");

// asyn/await
// async function run () {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();