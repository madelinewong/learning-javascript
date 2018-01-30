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



//conditional statements 
//if -> using to run code based on the answer to a question. 
//if-else -> using it to run code based on the answer to a question, but there is a fall back plan (the else)
//if-elseif-else -> I have multiple questions that determine what code to run. 
//Note: There is another way to called a 'switch', but it works a little differently. 

//if
if(3 === 3){
    console.log('Orange Crush is delicious!')
}

if('a' === 'b'){
    console.log('This will never print.'); 
}

//if-else 
if('grape' === 'banana'){
    console.log('This is never going to run.');
} else {
    console.log('This is a backup plan');
}

//if-elseif-else 
// const someNumber= 100; //A
// const someNumber = 42; //B
const someNumber = '2'; //C
if(someNumber === 100){ //A
    console.log('It is 100');
} else if(someNumber === 42){
    console.log('The meaning of life.')
} else { //C
    console.log('None of the others worked');
}























