//comparison 
//things that we compare must be comparable. 
//comparable means I can use the following operators: 
//    <, <==, >, >=, ===, !== (Full disclosure, there are more, but somtimes they cause problems at the beginning.)
const aString = 'abc';
const anotherString = 'abcd'; 
const aNumber = 123
const anotherNumber = 123.2
console.log("aString === anotherString: ", aString === anotherString); 
console.log("aString < anotherString: ", aString < anotherString); 
console.log("aString <== anotherString: ", aString <= anotherString);
console.log("aString > anotherString: ", aString > anotherString);
console.log("aString >= anotherString: ", aString >= anotherString); 
console.log("aString !== anotherString: ", aString !== anotherString); 
console.log("aNumber === anotherNumber:", aNumber === anotherNumber);
console.log("aNumber < anotherNumber:", aNumber < anotherNumber);
console.log("aNumber <== anotherNumber:", aNumber <= anotherNumber);
console.log("aNumber > anotherNumber:", aNumber > anotherNumber);
console.log("aNumber >= anotherNumber:", aNumber >= anotherNumber);
console.log("aNumber !== anotherNumber:", aNumber !== anotherNumber);
