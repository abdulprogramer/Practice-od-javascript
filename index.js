var name = "Naveed"
console.log('name',name);
let babies=['ali','haseeb','hassan','rehman','saeed']
let newbabies=babies.slice(2,4)
console.log("babies",newbabies);

let class11 =['ali','ijaz','rashid','minhass','saad']
class11.unshift('adil')
console.log("students in class11",class11);

let class12 =['ali','ijaz','rashid','minhass','saad']
class12.shift
class12.push(1234)
var newitem=class12.pop()
console.log("students in class11",class12);
console.log(newitem);




let fruits1 =["mango","orange","peach","gava","date","grapes"]
console.log("the array of fruits before is",fruits1);
fruits1.shift()



console.log("the array of fruits after shift is",fruits1);
// fruits1.push("pomigrant")
// console.log("the array of fruits after is",fruits1);
// fruits1.unshift("banana")
// console.log("the array of fruits 1 before is",fruits1);
// fruits1.splice(2,3)
// console.log("the array of fruits 2 before is",fruits1);
// let newfruites =fruits1.slice(1,4)
// console.log("the array of fruits 3 before is",newfruites);



let vegetablle =["onion","ginger","tomato","carit","bringle","cocumber"]
console.log("The array of vegetable is",vegetablle);




let num1=123
num1= num1.toString()
console.log("the final number is",typeof(num1)  );
// num1 =parseInt(num1)

// console.log("the final number is",typeof(num1)  );
// let number= 123456
// number=number.toString()
// console.log("number" ,typeof(number));

let tempInC =43
let tempInF=(tempInC*9/5)-32
console.log("temprature is",tempInF);