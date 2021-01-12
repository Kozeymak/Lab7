let number=12;
let string='228';
let bool=true;
let zero=null;
console.log(number+string); // число приводится к строке
console.log(number+bool); // булевая переменная приводится к числу 1 (если fаlsе, то к 0)
console.log(number+zero); // null приводится к числу
console.log(string+bool); // булевая переменная приводится к строке
console.log(string+zero); // null приводится к строке
console.log(bool+zero); // и null, и булевая переменная приводятся к числам

let a=10;
let b=5;
let s=a*b;
let p=(a+b)*2;
console.log(a+' '+b);
console.log(p);
console.log(s);
console.log(p/s);

let f=27;
let c=-40;
console.log(`${c}°C cоответствует: ${((c*1.8)+32)}°F`);
console.log(`${f}°F cоответствует: ${((f-32)*(5/9))}°C`);

let year=prompt('Какой год?',2020);
(((year%4==0)&&(year%100!=0))||(year%400==0))? alert("Это високосный год!"):alert("Это не високосный год!");

let first=Number(prompt('Введите первое число:',5));
let second=Number(prompt('Введите второе число:',5));
if ((first==10)||(second==10)||(first+second==10)) {
    alert("Истина");
} else {
    alert("Ложь");
}