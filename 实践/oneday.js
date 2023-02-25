// 变量作用域 （尽可能避免使用全局变量）
var myVariable = 'global';
var myOtherVariable = 'global';
function myFunction() {
    var myVariable = 'local';
    console.log(this);
    return myVariable;
}
function myOtherFunction() {
    myOtherVariable = 'local';

    return myOtherVariable;
}
console.log(myVariable); // global
console.log(myFunction()); // local
console.log(myOtherVariable); // global
console.log(myOtherFunction()); // local
console.log(myOtherVariable); // local

// 位运算符

console.log('5 & 1:',(5 & 1));
console.log('5 | 1:',(5 | 1));
console.log('~ 1:',(~ 1));
console.log('5 ^ 1 :>> ', 5 ^ 1);
console.log('5 z :>> ', 5 z);

