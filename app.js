// console.log("try it works or not");
// Array.prototype.myPush = function (...args) {
//   for (let i = 0; i < args.length; i++) {
//     this[this.length] = args[i];
//   }
// };
// const array = [1, 5, 6, 7];
// array.myPush(3, 5, 6);
// console.log(array);

// Array.prototype.myPop = function () {
//   let lastItem = this[this.length - 1];
//   this.length = this.length - 1;
//   return lastItem;
// };
// const array = [5, 10];
// let x = array.myPop();
// console.log(x, array);
// Array.prototype.myIndexOf = function (item) {
//   let result = -1;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === item) {
//       result = i;
//       break;
//     }
//   }
//   return result;
// };
// const array = [5, 6, 7, 8, 5, 9, 6, 10];
// console.log(array.myIndexOf(14));

// Array.prototype.myMap = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let mapedItem = callback(this[i], i, this);
//     newArr.push(mapedItem);
//   }
//   return newArr;
// };
// let array = [10, 20, 30];
// let array2 = array.myMap((el) => el * 10);

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
let array = [10, 20, 30];
let sum = 0;
array.myForEach((el) => (sum = sum + el));
