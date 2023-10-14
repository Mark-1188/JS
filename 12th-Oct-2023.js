//5th-Oct
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