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