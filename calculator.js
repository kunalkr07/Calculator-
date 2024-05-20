const prompt=require("prompt-sync")();

console.log("1.Addition");
console.log("2.Substraction");
console.log("3.Division");
console.log("4.multiplication");
console.log("5.Modulus");

let userNumber=parseInt(prompt("Choose your option"));
let num1=parseInt(prompt("Enter first number:"));
let num2=parseInt(prompt("Enter second number:"));
let total;

switch(userNumber){
    case 1:
     total=num1+num2;
     console.log(`The Addition of ${num1} + ${num2} = ${total}`);
     break;

    case 2:
     total=num1-num2;
     console.log(`The Substraction of ${num1} - ${num2} = ${total}`);
     break;

    case 3:
            total=num1/num2;
            console.log(`The Division of ${num1} / ${num2} = ${total}`);
            break;
    case 4:
     total=num1*num2;
     console.log(`The Multiplication of ${num1} * ${num2} = ${total}`);
     break;

    case 5:
     total=num1%num2;
     console.log(`The Modulos of ${num1} % ${num2} = ${total}`);
     break;

     default:
        console.log("Invalid choice!\nTry again");
}