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

export default (userName, message) => {
    console.log('Hello');
    return userName + message;
}