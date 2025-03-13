// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import {apiKey, abc as content} from "./util.js";
// import * as util from "./util.js";
// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";

// userMessage = "New Value"; // 상수 값 변경 불가

// console.log(userMessage);
// console.log(userMessage);

// console.log(10 === 5); // false | 둘이 같은가

// function greetUser(userName, message = "Hello") { // 함수 생성
//     console.log("Hello!");
//     console.log(userName);
//     console.log(message);

//     return "Hi I am " + userName + "." + message
// }

// console.log(greetUser("Max")); // 함수 호출
// const greeting2 = greetUser("Manuel", "Hello what's up"); // 함수 호출
// console.log(greeting2);

// export default (userName, message) => {
//     console.log('Hello');
//     return userName + message;
// }


// const user = {
//     name: 'Max',
//     age: 34,
//     greet() {
//         console.log("Hello!");
//         console.log(this.age);
//     }
// };

// console.log(user);
// user.greet();

// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("Hi!");
//     }
// }

// const user1 = new User("Manual", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// // const index = hobbies.findIndex((item) => {
// //     return item === 'Sports';
// // })

// const index = hobbies.findIndex((item) => item === "Sports"); // 상단과 같은 결과

// console.log(index); // 0 출력됨

// // const editedHobbies = hobbies.map((item) => item + "!"); // 기존 배열을 수정하지 않고 새롭게 생성
// const editedHobbies = hobbies.map((item) => ({text: item})); // 객체로 담아서 생성
// console.log(editedHobbies);

// const userNameData = ["Max", "Schd"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

const [firstName, lastName] = ["Max", "Schd"];

console.log(firstName);
console.log(lastName);

// const user = {
//     name: "Max",
//     age: 34
// }

// const name = user.name;
// const age = user.age;

const {name: userName, age} = {
    name: "Max",
    age: 34
}

console.log(userName);
console.log(age);