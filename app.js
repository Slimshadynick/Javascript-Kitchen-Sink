// Name variable
var name = "Nikhil";
// Number of states
const numStates = 28;
// Sum operator checking
var sum = 5 + 4;

function sayHello() {
  console.log("Hello World!");
}

sayHello();

function checkAge(name, age) {
  if (age < 21) {
    console.log("Sorry " + name + " ,you aren't old enough to view this page!");
  }
}

checkAge("Charles", 21);
checkAge("James", 18);

veggies = ["Jalapeno", "Potato", "Tomato", "Capsicum"];

for (i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

var pet = {
  name: "KOko",
  breed: "Lhasa Apso"
};

console.log(pet);

var arr = [];
arr[0] = {
  name: "Nikhil",
  age: 23
};

arr[1] = {
  name: "Pratham",
  age: 22
};

arr[2] = {
  name: "Aditya",
  age: 19
};

arr[3] = {
  name: "Parth",
  age: 20
};

arr[4] = {
  name: "Ashutosh",
  age: 21
};

for (i = 0; i < arr.length; i++) {
  checkAge(arr[i].name, arr[i].age);
}

function getLen(str) {
  len = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      len++;
    }
  }
  return len;
}

var l = getLen("Hello World");
console.log(l);
if (l % 2 == 0) {
  console.log("World is even!");
} else {
  console.log("World is odd!");
}
