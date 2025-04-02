let a =[10, 20];
let b=a ;
b.pop();
//console.log(a);


const obj={
  name:"Guweiyi",
  place:"London",
  elements:["light","dark","ice"]
}
//console.log(obj.name);

obj.elements="fire";
//console.log(obj.elements);

//function
function demon(...a){
  console.log(a);
}
//demon(43,21,31,98,112);

//function sum(a,b){
//  return a+b;
//}
//console.log(sum(19,"117"));

/*function findUniqueAndRepeated(arr) {
  let uniqueValues = arr.filter((num, _, a) => a.indexOf(num) === a.lastIndexOf(num));
  let repeatedValues = [...new Set(arr.filter((num, _, a) => a.indexOf(num) !== a.lastIndexOf(num)))];
  return { uniqueValues, repeatedValues };
}

let numbers = [10, 10, 20, 30];
let result = findUniqueAndRepeated(numbers);
console.log("Unique Values:", result.uniqueValues);
console.log("Repeated Values:", result.repeatedValues);
*/

function isPalindrome(num) {
  let str = num.toString();
  let rev = str.split('').reverse().join('');
  console.log(str === rev ? "Palindrome" : "Not a palindrome");
}

isPalindrome(121);
isPalindrome(123);

