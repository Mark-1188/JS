//Can a rectangle can form a Square
let length=+prompt("Enter the Length")
let breath=+prompt("Enter the Breath")
if(length==breath)
{
console.log("It can form a Square")
}
else{console.log("It cannot form a Square")}

// Arthematic Progressions
//Find out Arthematic Progression or Not
let a=+prompt("Enter the value of A")
let b=+prompt("Enter the value of B")
let c=+prompt("Enter the value of C")
if(c-b==b-a){
console.log("It is an Arithematic Progression")
}
else{
console.log("It is not an Arithematic Progression")
}

//.....
let a=+prompt("Enter the value of A")
let b=+prompt("Enter the value of B")
let c=+prompt("Enter the value of c")
if(a%2==0 && b%2==0 && c%2==0){
console.log("1")
}else{console.log("-1")}

//....
//1 rupee coins=2; a=1*2=2
//2 rupee coins=5; b=2*5=10
//5 rupee coins=10; c=5*10=50
//10 rupee coins=5; d=10*5=50

let a=+prompt("Enter the money of A")
let b=+prompt("Enter the money of B")
let c=+prompt("Enter the money of C")
let d=+prompt("Enter the money of D")
var e=+prompt("Enter the value of Bill")
var f=a+b+c+d
if(e==f){
console.log("Paid")
}
else if(e>f){
console.log(e-f) 
}
else if(e<f){
console.log(f-e)
}
