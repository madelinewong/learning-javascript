// single line comment 
/**
 * This is a multi-line comment
 */

 //Variables 
 var name= "Madeline"; //old school javascript(don't use this.)
 const fruit= "Banana"; //constant binding (lock it in the cup)
 let veggie= "Carrot";// similar to Var, but some other differences...
 console.log("Name: ", name) //print
 console.log("Fruit: ", fruit);
 console.log("Veggie: ", veggie);

 //Simple Data Types
 //Strings
 const aString = "things and stuff";
 //a string=> spaces in variable names are bad!!!!
 //so we remove the space and capitalize all words but the first. 
 //this is called camel casing COVENTION! 
 const anotherString = 'some other things and stuff'; //this is single quotes.
 const stringWithNumbers = '1234.03'; 
 console.log("aString:", aString); 
 console.log("anotherString:", anotherString);
 console.log("stringWithNumbers:", stringWithNumbers);
 console.log("what is the type of aString?", typeof aString); 
 //Strings will come back up. There is more to know. 
 //Numbers
 const aNumber = 1; 
 const anotherNumber = 3.5; 
 console.log("aNumber: ", aNumber);
 console.log("anotherNumber:", anotherNumber); 
 console.log("Type of aNumber: ", typeof aNumber);
 console.log("Type of anotherNumber:", typeof anotherNumber); 
 //Numbers will come back up. There is more to know. 
 //Now we're onto Arrays. 
 const anArray = [1, 2, 3, 4]; //an array of numbers.
 const aStringArray = ["cheese", "bacon", "cheese"]; //an array of strings. 
 console.log("anArray: ", anArray); 
 console.log("aStringArray:", aStringArray); 
 console.log("How many elements are in anArray?", anArray.length); 
 //the "." after anArray (The variable) acesses the property length of an array. 
console.log("What is the type of anArray?", typeof anArray);
//We definitely aren't finished with arrays. These are everywhere. 
