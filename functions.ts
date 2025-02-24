// declaring functions in differents ways
// 1. using function keyword

function display(){
    console.log('Using function keyword');
}
display();
// 2. anonymous function
const display1 = function(){
    console.log('anonymous function');
}
display1();

//3. arrow function

const display2 = () => console.log('Arrow function');
display2();

// 4. functions with parameters

function sum(n1:number,n2:number)
{
    console.log(n1+n2);
}
sum(4,6);

// functions with return types

function add(n1:number,n2:number):number
{
    return n1+n2
}
console.log(add(45678,23.567));