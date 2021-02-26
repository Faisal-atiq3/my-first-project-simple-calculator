let num1 = prompt("Enter 1st Number ");
let num2 = prompt("Enter 2nd Number ");
 

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result;

//Addition 
result= num1+num2;
document.write("Addititon:  " + num1 + " + " + num2 + " = " + result + "<br>" );

//Substraction 
result= num1-num2;
document.write("Substraction:  " + num1 + " - " + num2 + " = " + result + "<br>");

//Multiplication
result= num1*num2;
document.write("Multiplication:  " + num1 + " * " + num2 + " = " + result + "<br>");

//Divition 
result= num1/num2;
document.write("Divition:  " + num1 + " / " + num2 + " = " + result + "<br>");