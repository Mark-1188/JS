//Task-1---> For loop//
for(var a=1; a<=10; a++)
{
alert(a)
}
//While loop//
var a=0
while(a<=10)
{
alert(a)
a++;
}
//Do-While loop//
var a=0
do{
alert(a);
a++;
}while(a<=10)

//Task-2--->For loop//
var a=+prompt("Enter the value")
for(var b=3; b<=a; b+=3)
{
console.log(b)
}
//while loop//
var a=+prompt("Enter the value")
var b=3
while(b<=a)
{
console.log(b)
b+=3
}
//Do-While loop//
var a=+prompt("Enter the value")
var b=3
do{
console.log(b)
b+=3
}while(b<=a)

//Task-3--->For loop//
var a=prompt("Enter the value")
for(i=a.length-1; i>=a.length-1; i--){
console.log(a[i])
}
//While loop
var a=prompt("Enter the value")
var i=a.length-1
while(i>=a.length-1){
console.log(a[i])
i--
}
//Do-While
var a=prompt("Enter the value")
var i=a.length-1
do{
console.log(a[i])
i--
}while(i>=a.length-1)

//Task-4--->For loop
var a=+prompt("Enter the value")
a==6 || a==7 || a==8 ? alert(a):alert("Enter the valid number")
///
var a=+prompt("Enter the value")
a>5 && a<=8 ? alert(a):alert("Enter the valid number")

//Task-5--->For loop
var a=prompt("Enter the value")
for(i=a.length-1; i>=0; i--)
{
console.log(a[i])
}
//While loop
var a=prompt("Enter the value")
var i=a.length-1;
while(i>=0)
{
console.log(a[i])
i--
}
//Do-While
var a=prompt("Enter the value")
var i=a.length-1;
do{
console.log(a[i])
i--
}while(i>=0)

//Task-6---For loop
var a="mark"
var len=0
for(i=0; a[i]!=undefined; i++)
{
len++
}
console.log(i)
//While Loop
var a="mark"
var len=0
var i=0
while(a[i]!=undefined)
{
i++
len++
}
console.log(i)
//Do-While
var a="mark"
var len=0
var i=0
do{
i++
len++
}while(a[i]!=undefined)
console.log(i)
