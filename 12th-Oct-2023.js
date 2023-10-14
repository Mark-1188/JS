//**********************5th-Oct***********************
//Task-1
function mark(a){
    a==9704474272 ? console.log("Valid Number"):console.log("Invalid Number")
    }
    console.log(mark(a=prompt("Enter the number")))

//Task-2
function mark(a, b){
    a>b ? console.log("A is greater then B"):console.log("B is greater than A")
    }console.log(mark(a=+prompt("Enter the value of A"), b=+prompt("Enter the value of B")))

//Task-3    
function mark(a,b,c){
    a+b+c==50 ? console.log("Hello World"):console.log("Sum of A, B, C is not equal to 50")
    }
    console.log(mark(a=+prompt("Enter the value of A"), b=+prompt("Enter the value of B"), c=+prompt("Enter the value of C")))

//Task-4
function mark(a){
    a==0 ? console.log("Monday"):
    a==1 ? console.log("Tuesday"):
    a==2 ? console.log("Wednesday"):
    a==3 ? console.log("Thursday"):
    a==4 ? console.log("Friday"):
    a==5 ? console.log("Satuday"):
    a==6 ? console.log("Sunday"):console.log("enter valid number")
    }
    console.log(mark(a=+prompt("Enter the number b/w 0-6")))    

//Task-5
function mark(a){
        a==50 ? alert(++a):alert(--a)
        }
        mark(a=+prompt("Enter the value"))

//Task-6
function mark(a){
    a=="Mark" ? alert("Valid Name"):alert("Invalid Name")
    }
    mark(a=prompt("Enter the Name"))

//Task-7
function mark(a, b){
    a+b===50 ? alert(a+b+50):alert(a+b-50)
    }
    mark(a=+prompt("Enter the value of A"), b=+prompt("Enter the value of B"))

//********************************6th-Oct*************************
//Task-1
function mark(a){
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
    alert('Enter a valid Number')
    }
    }
    console.log(mark(a=+prompt("Enter a Number")))

//Task-2
function mark(a, b, c){
    if(a>b && a>c){
    alert(a+ "is Greater")
    }
    else if(b>a && b>c){
    alert(b+ "is Greater")
    }
    else{
    alert(c+ "is Greater")
    }
    }
    mark(a=+prompt("Enter the value of A"), b=+prompt("Enter the value of B"), c=+prompt("Enter the value of C"))

//Task-3
function mark(a,b){
    if(a>b){
    alert("A is Greater")
    }
    else{alert("B is Greater")}
    }
    mark(a=+prompt("Enter the value of A"), b=+prompt("Enter the value of B"))

//Task-4
function mark(a){
    if(a==1){
    alert("Hey, Today is Monday")
    }
    else if(a==2){
    alert("Hey, Today is Tuesday")
    }
    else if(a==3){
    alert("Hey, Today is Wednesday")
    }
    else if(a==4){
    alert("Hey, Today is Thursday")
    }
    else if(a==5){
    alert("Hey, Today is Friday")
    }
    else if(a==6){
    alert("Hey, Today is Saturday")
    }
    else if(a==7){
    alert("Hey, Today is Sunday")
    }
    else{
    alert("Enter a valid number")
    }
    }
    mark(a=+prompt("Enter a number b/w 1-7"))

//Task-5
function mark(a){
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
          alert("Enter a valid  number") 	
    }
    }
    mark(a=+prompt("Enter the value b\w 1-12"))

//Task-6
function mark(a, b, c){
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
}
mark(a=+prompt("Enter the value of A"), b=+prompt("Enter the value of B"), c=prompt("Enter the value of C"))

//****************************10th-Oct***************************
//Task-1
