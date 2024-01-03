// document.getElementById('demo').innerHTML = 'hey i am pooja kalkani'

function myFunction() {
    // document.getElementById('demo').innerHTML = 'hello good afternoon'
    // document.write('hello good afternoon')
}

// window.alert('hey km so maj ma ne?');

// console.log('demo task kaha he??')


// let x,y,z
// x = 10;
// y = 20;
// z = 5;

// document.getElementById('demo').innerHTML = x + y;

// var x = 10;
// var x = 15;

// document.getElementById('demo').innerHTML = x;

// arithmetic opertor


// let x = 15;
// let y = 20;
// document.getElementById('demo').innerHTML = x + y;
// document.getElementById('demo').innerHTML = x - y;
// document.getElementById('demo').innerHTML = x * y;
// document.getElementById('demo').innerHTML = x ** y;

// let x = 5;
// x++;
// x--;
// let z = x ** 2
// document.getElementById('demo').innerHTML = z;


// let x = 10;
// x+=5;
// x*=5;
// x-=5;
// x**=5;
// x/=5;
// x%=5;
// document.getElementById('demo').innerHTML = x;


// data type

// null number string symboll bigint bolean object undefind


// let a = null;
// let b = 20;
// let c = true;
// let d = BigInt('567');
// let e = "Harry";
// let f = Symbol("I am a nice symbol");
// let g = undefined;
// console.log(a,b,c,d,e,f,g);

// const a1 = {
//     name:"viral", surname: "gediya"
// }
// a1['lastname'] = "pankajbhai"
// document.getElementById('demo').innerHTML = a1;
// console.log(a1);

// let a = 10;
// // a += 5;
// // a -= 5;
// // a *= 5;
// a /= 5;
// document.getElementById('demo').innerHTML = a;


// com operator
// let a = 6;
// let b = 8;

// document.getElementById('demo').innerHTML = a == b;
// document.getElementById('demo').innerHTML = a != b;
// document.getElementById('demo').innerHTML = a === b;
// document.getElementById('demo').innerHTML = a !== b;
// document.getElementById('demo').innerHTML = a > b;
// document.getElementById('demo').innerHTML = a < b;
// document.getElementById('demo').innerHTML = a <= b;
// document.getElementById('demo').innerHTML = a >= b;

// logical operator


// document.getElementById('demo').innerHTML = a<b && a===6;
// document.getElementById('demo').innerHTML = a>b || a===6;
// document.getElementById('demo').innerHTML = !true;


// if else

// let a = 100;
// let b = 200;

// if(a > b) {
//     alert("i love you pooju");
// }else {
//     alert('i hate you pooju');
// }

// let a = prompt("hey what you age");

// a = Number.parseInt(a);
// if(a<0) {
//     alert("This is invalid age")
// }
// else if(a<9) {
//     alert("you are kid")
// }
// else {
//     alert("this is valid age")
// }
// console.log('Done')
// alert("You can" , (a<18? "not drive" : "drive"))


// for loop

// for(let a =0; a<34; a++) {
//     document.getElementById(demo).innerHTML = +a;
// }

// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// for (let i=0; i<n; i++) {
//     sum +=  i
// }

// console.log("sum of first" + n + "natural number is" + sum);

// for in loop

// let cars = {
//     modal:2022,
//     name:'swift',
//     parcing:"Gj05",
//     price:600000,
//     owner:2
// }

// for(let a in cars) {
//     console.log(a + " are " + cars[a])
// }


// for of loop

// let name = ["viral" , "yash" , "chetan"];

// for(let a of name[2]) {
//     console.log(a)
// }


// while loop

// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// let i = 0;
// while(i<n) {
//     console.log(i);
//     i++;
// }

// do while loop

// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<n);


// fucntion

// let a = 1;
// let b = 2;
// let c = 4;

// console.log("Sum of a and b is" , a + b);

// function myFunction(x,y) {
//     return  (x + y)/2;
// }

// let a = 1;
// let b = 2;
// let c = 4;

// console.log('one plus average of a and b is ' , myFunction(a,b));
// console.log('one plus average of b and c is ' , myFunction(b,c));
// console.log('one plus average of a and c is ' , myFunction(a,c));

// function myFuction(a,b) {
//    return a+b;
// }

// let y = myFuction(4,50);
// document.getElementById('demo').innerHTML = y;

// let name = "viral";
// console.log(name.length)


// let name1 = "viral";
// let name2 = "yash";

// let sentence = `${name1} is a brother of ${name2}`;
// console.log(sentence)

// let name = `adam D\r'Angelo`;
// console.log(name);


// string methods

// let name1 = "i am viral gediya"
// let name2 = "i am pooja kalkani"
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(0));
// console.log(name.replace("gediya" , "kalkani"));
// console.log(name.concat(name1,name2));

// array methods

// let a = [ "viral" , "chetan" , "yash" , "not name"];
// a[3] = "rajesh"
// console.log(a);
// console.log(typeof a)

// let b = a.toString();
// console.log(typeof(b))


// let b = a.join('_');

// console.log(b)

// console.log(a.pop(2))
// console.log(a)

// console.log(a.push("rajesh"));
// console.log(a)

// console.log(a.shift());
// console.log(a)

// console.log(a.unshift("rajesh"));
// console.log(a)

// console.log(delete a[2]);
// console.log(a)


// let a1 = [4,5,6];
// let a2 = [7,8,9];
// let a3 = [1,2,3];

// console.log(a1.concat(a2,a3))

// let a = [5,2,3];
// console.log(a.sort())

// let num = [10]
// num.splice(2,3,1021,1022,1023);
// console.log(num)


// let num = [2,3,4,5,6,7,8,9];
// console.log(num.slice(3,5))

// let num = [2,3,4,5,6,7,8,9];
// console.log(num.reverse())


// for each loop

// let num = [2,3,5,6];
// num.forEach((element) => {
//     console.log(element*element)
// })

// array from

// let a = "viral";
// let arr = Array.from(a);
// console.log(arr)

// const num = [2,5,6,10];

// for (let  i of num) {
//     console.log(i)
// }

// for (let  i in num) {
//     console.log(i)
// }

// map

// let a = num.map((element , index) => {
//     console.log(element)
//     return element + index
// })
// console.log(a)


// filter methods

// let a = [1,10,19,5,60,3,20];
// let a1 = a.filter((b) => {
//     return b<25
// })
// console.log(a1)
// reduce methods
// let a1 = [1,2,3,4,5,6];
// let a2 = a1.reduce((h) => {
//     return h
// })
// console.log(a2)
// console time
// console.time('forloop')
// for(let i = 0; i<5; i++) {
//     console.log(i)
// }

// console.timeEnd("forloop")
// let x = 30;
// x +=5;
// x &&=10;
// x |10;
// document.getElementById('demo').innerHTML = x;


// alert

// alert("hello");
// prompt('please enter value');
// confirm("please confirm order");

// window object model
// window.console.log(window);

// document object model
// console.log(document.body.style.backgroundColor = "green");

// Brower object model

// alert("hello good afternoon")

// let a = prompt("Enter your age");
// a = Number.parseInt(a);
// let runAgain = true;
// const canDrive = (a) => {
//     return a > 18 ? true : false
// }
// while (runAgain) {
//     if(a<0) {
//         console.error("please enter a valid age");
//         break;
//     }
//     if (canDrive(a)) {
//         alert("Yes you can drive")
//     }
//     else {
//         alert("You cannot drive")
//     }
//     runAgain = confirm("do you want to play again")
// }

// let number  = prompt("Enter your number");
// number = Number.parseInt(number);

// if(number > 4) {
//     location.href  = "https://google.com"
// }

// let color = prompt("Enter the page background color");
// document.body.style.background = color;


// today code

// automaticaly var
// x=5;
// y=6;
// z = x + y;
// console.log(z);

// var var
// var x = 5;
// var y = 10;
// var z = x + y;
// console.log(z);

// let 
// let a = 10;
// let b = 20;
// console.log(z = a + b);

// const

// const c = 25;
// const d = 10;
// console.log(e = c + d);

// var declare

// let _lastname = "viral";
// let $ = 10;
// let Y = 15;
// let y = 10;

// Assignment operator

let x = 10;

// function

function myFunction(p1,p2) {
    return p1 * p2
}
let a = myFunction(4,3);
console.log(a)

// string length
// let text = "hellooo";
// console.log(text.length);

// Escape character : -

// let name = "We are the so-called \"Vikings\" from the north.";
// let name = "We are the so-called Viking\'s from the north.";
// let name = "We are the so-called Viking\\s from the north.";
// let name = "We are the so-called Vikings \v from the north.";
// console.log(name);

// string methods

// let name1 = "I am viral gediya";
// let name2 = "I am pooja kalkani";

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name1 + name2);

// const name = "I am viral gediya";
// console.log(name.charAt(5))
// console.log(name.charCodeAt(5));
// console.log(name1.concat(name2));
// console.log(name.at(5));

// const data = "Apple, Banana , kiwi";
// console.log(data.slice(7))
// console.log(data.substring(7,13))
// console.log(data.substr(7,6))


// let text = "5";
// // text = text.padStart(4, "0");
// text = text.padEnd(4, "0");
// console.log(text);

let text = "hello world";
// console.log(text.repeat(2));
console.log(text.replace("hello" , "hey"))  