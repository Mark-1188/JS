//Task-1//
var a=+prompt("Enter the value");
if(a<=6){
alert("Good Morning")
}
else if(a<=12){
alert("Good Afternoon")
}
else if(a<=18){
alert("Good Evening")
}
else if(a<=24){
alert("Good Night")
}
else{
"Invalid Input"
}

//Task-2//
var a=+prompt("Enter the value of A")
var b=+prompt("Enter the value of B")
var c=+prompt("Enter the value of C")
if(a>b && a>c)
alert("A is greater than both B & C")
else if(b>a && b>c)
alert("B is greater than both A & C")
else
alert("C is greater than both A & B")

//Task-3//
var a=+prompt("Enter the value of A")
var b=+prompt("Enter the value of B")
if(a>b){
alert("A is Greater than B")
}
else{alert("B is Greater than A")}

//Task-4//
var a=+prompt("Enter a number between 1 to 7")
if(a==1){
alert("Hey,Today is Monday")
}
else if(a==2){
alert("Hey,Today is Tuesday")
}
else if(a==3){
alert("Hey,Today is Wednesday")
}
else if(a==4){
alert("Hey,Today is Thursday")
}
else if(a==5){
alert("Hey,Today is Friday")
}
else if(a==6){
alert("Hey,Today is Saturday")
}
else if(a==7){
alert("Hey,Today is Sunday")
}
else{alert("Invalid Input")}

//Task-5//
var a=+prompt("Enter the value between 1 to 12")
switch(a){
	case 1:
		alert("Hey, It's January")
    break; 
  case 2:
		alert("Hey, It's February")
    break;
	case 3:
		alert("Hey, It's March")
    break;
  case 4:
		alert("Hey, It's April")
    break;
  case 5:
		alert("Hey, It's May")
    break;
  case 6:
		alert("Hey, It's June")
    break;
	case 7:
		alert("Hey, It's July")
    break;
  case 8:
		alert("Hey, It's August")
    break;
  case 9:
		alert("Hey, It's September")
    break;
  case 10:
		alert("Hey, It's October")
    break;
	case 11:
		alert("Hey, It's November")
    break;
  case 12:
		alert("Hey, It's December")
    break;
  default:
  	alert("Invalid  Input") 	
}

//Task-6//
//USING IF ELSE
var a=+prompt("Enter the value of A")
var b=+prompt("Enter the value of B")
var c=prompt("Enter the symbol")
if(c== "+"){
alert(a+b)
}
else if(c== "-"){
alert(a-b)
}
else if(c== "*"){
alert(a*b)
}
else{alert("Enter the valid symbol")}

//USING SWITCH
var a=+prompt("Enter the value of A")
var b=+prompt("Enter the value of B")
var c=prompt("Enter the symbol")
switch(c){
	case "+":
		alert(a+b)
    break;
  case "-":
   	alert(a-b)
    break;
  case "*":
   	alert(a*b)
    break;
  default:
  	alert("Enter the Valid symbol") 
}

//Task-7//