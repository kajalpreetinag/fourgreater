const input = require("readline-sync");

let a = input.questionInt("enter first number: ");
let b = input.questionInt("enter second number: ");
let c = input.questionInt("enter third number: ");
let d = input.questionInt("enter fourt number: ");

if(a>b){
    l= a;
}
else{l=b;}

if(c>d){
    l1=c;
}
else{l1=d}

if(l>l1){
    l2=l;
}
else{l2=l1;}
console.log("l2 is greater",l2)