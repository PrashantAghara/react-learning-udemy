//Primitive Types : number, string, boolean
let age: number;
age = 21;
age = 2.4;
// age='prashant'; Error
let userName: string;
userName = "prashant";
// userName = 23; Error

//----------------------

//Complex types : Array & Object
let arr: string[];
arr = ["A", "B"];
// arr = ['2', 1]; Error

type Person = {
  name: string;
  age: number;
}; //Type Alias

let person: Person;
person = {
  name: "Prashant",
  age: 23,
};
// person = {
//     name: true;
// } ERROR

let people: Person[]; // Array of Object

//Type inference
let course = "React"; //Automatically takes type
// course = 3; Error

//Union Types
let course1: string | number = "React";
course1 = 3;

// Functions and Types
function add(a: number, b: number) {
  // Type inference is used here
  return a + b;
}

//Void return Type
function println(a) {
  console.log(a);
}

//Generics
function insertBegins<T>(arr: T[], val: T) {
  const newArr = [val, ...arr];
  return newArr;
}
const updateArr = insertBegins([1, 2, 3], 0);
const stringArr = insertBegins(["A", "B", "C"], "D");
