// The primitives: string, number, and boolean

let str:string = 'Hello, world';
let num:number = 198978
let floatnum:number = 23456.567
let res:boolean = true;

console.log(str, num, floatnum, res);

// declaring arrays

let fruits:string[] = ['orange','kiwi','mango','banana','grapes'];
fruits.forEach(fruit => console.log(fruit));
console.log(fruits);
for(const f in fruits)
{
    console.log(fruits[f]);
}
for(const f of fruits)
{
    console.log(f);
}