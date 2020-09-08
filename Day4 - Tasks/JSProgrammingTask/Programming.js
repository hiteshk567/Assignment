// 1. Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

function addFive(n) {
    return n + 5;
}

console.log(addFive(10));

// 2. Write a function called “getOpposite”.
// Given a number, return its opposite

function getOpposite(n) {
    if(n===0) return 0;
    if(typeof(n) !== "number") return -1;
    let temp = +n;
    return (-n);
}

console.log(getOpposite(-5));

// 3. Fill in your code that takes an number minutes and converts it to seconds

var min = 5;
function toSeconds(min) {
    return min * 60;
}
var secs = toSeconds(min)
console.log(secs);

// 4. Create a function that takes a string and returns it as an integer.

var mystr = "1200";
function toInteger(mystr) {
    let temp = +mystr;
    return temp;
}
var myint = toInteger(mystr);
console.log(myint);

// 5. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

var myint = 0;
function nextNumber(myint) {
    let temp = +myint;
    return (++temp);
}
var myNextint = nextNumber(myint);
console.log(myNextint);

// 6. Create a function that takes an array and returns the first element

var arr = [1, 2, 3];
function getFirstElement(arr) {
    if(arr.length > 0)
        return arr[0];
    return -1;
}
var data = getFirstElement(arr)
console.log(data);

// 7. Convert Hours into Seconds
// Write a function that converts hours into seconds.

function hourToSeconds(arr) {
    let temp = +arr;
    return temp*3600;
}
var data = hourToSeconds(3);
console.log(data);

// 8. Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.

function findPerimeter(num1,num2) {
    return (2*num1 + 2*num2);
}
var peri = findPerimeter(6,7);
console.log(peri);

// 9. Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2) {
    return num1+num2 < 100;
}
var res = lessThan100(122,15);
console.log(res);

// 10. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(num1,num2) {
    return num1 % num2;
}
var res = remainder(1,3);
console.log(res);

// 11. Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function CountAnimals(tur,horse,pigs) {
    return (2*tur + 4*horse + 4*pigs);
}
var legs = CountAnimals(2,3,5);
console.log(legs);

// 12. Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1,num2) {
    let sec = num2 * 60;
    return num1 * sec;
}
var fps = frames(10,25);
console.log(fps);

// 13. Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num1) {
    return num1 % 5 === 0;
}
var divisible = divisibleByFive(5);
console.log(divisible);

// 14. Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

function isEven(num){
    if(typeof(num) !== "number") return -1;
    return num % 2 === 0;
   }
   var even = isEven("5");
   console.log(even);

//    15. Write a function called “areBothOdd”.
//    Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2){
    return num1%2 === 1 && num2%2===1;
   }

   console.log(areBothOdd(0, 0));

//    16. Write a function called “getFullName”.
//    Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.


function getFullName(firstName, lastName){
    return firstName + " " + lastName;
   }

   console.log(getFullName("hitesh", "kumar"));

//    17. Write a function called “getLengthOfWord”.
//    Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word1){
    if(typeof(word1) !== "string")
        return -1;
    return word1.length;
   }

   console.log(getLengthOfWord("hitesh"));

//    18. Write a function called “getNthElement”.
//    Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.

function getNthElement(array,n){
    let res;
    if(n >= array.length || array.length === 0 || n < 0) return res;
    res = array[n];
    return res;
   }

   console.log(getNthElement([1, 2, 3], 1));

//    19. Write a function called “removeProperty”.
//    Given an object and a key, “removeProperty” removes the given key from the given object.

function removeProperty(obj, k){
        for(let key in obj) {
            if(key == k)
                delete obj[k];
        }
        return obj;
   }
   let obj = {
       name: "hitesh",
       coder: "5star"
   }

   console.log(removeProperty(obj, "coder"));

//    20. Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
//    n = 0 -> 2⁰ -> [1]
//    n = 1 -> 2⁰, 2¹ -> [1,2]
//    n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

function powersOfTwo(n){
    let res = [1];
    let temp = 1;
    for(let i=1;i<n;i++) {
        res.push(res[i-1] * 2);
    }
    return res;
  }
  console.log(powersOfTwo(4));

 //21. Function prints the first nPrimes numbers
  function printPrimes(nPrimes)
  {
   var n = 0;
   var i = 2;
   
   while(n < nPrimes)
   {
   if (isPrime(i))
   {
   console.log(n + " → " + i);
   n++;
   }
   
   i++;
   }
  }
  // Returns true if a number is prime
  function isPrime(n)
  {
      for(let i=2;i<n;i++) {
        if(n%i === 0)
            return false;
      }
      return true;

  }

  printPrimes(5);

//   22.Reverse a string

  var s = reverseString("JavaScript");
  console.log(s);
  function reverseString(s)
  {
    let i=0, l=s.length;
    let arr = s.split("");
    while(i<l) {
        let temp = arr[i];
        arr[i] = arr[l];
        arr[l] = temp;
        i++, l--;
    }
    return arr.join("");
  }

//   23. Create a function that will merge two arrays and return the result as a new array

  var ar1 = [1, 2, 3];
  var ar2 = [4, 5, 6];
  var ar = mergeArrays(ar1, ar2);
  console.log(ar);
  function mergeArrays(ar1, ar2)
  {
   var result = [];
  //this will add the first array to the result array
  for(let el of ar1)
   {
   result.push(el);
   }
   for(let a of ar2)
    result.push(a);
   //Some piece of code goes here 
   
   return result;
  }