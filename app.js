// console.log("try it works or not");
Array.prototype.myPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
};
const array = [1, 5, 6, 7];
array.myPush(3, 5, 6);
console.log(array);
