/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
for (let i=0; i< string1.length;i++){
    if (string1[i]==='j'){
        console.log(i)
    }
}



/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
 const newString=string2[2]+string2[11]+string2[11]+string2[10];
 console.log(newString);



/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...

const final=string3.repeat(4)+' Batman';
console.log(final)


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...

const numberOfSpaces = 2; 
let spaceCount = 0; 
let sliceIndexStart = 0;
let sliceIndexEnd = fruit.length; 
let loop=0
let aux=0;
for (let j = 0; j < fruit.length; j++) { 
    if (fruit[j] === ' ') {
        spaceCount++;
    }
    if (spaceCount === numberOfSpaces) {
        aux = j + 1; 
        if (loop==0){
            sliceIndexStart=aux;
        }

        loop++;
    }
    if (spaceCount === numberOfSpaces + 1) {
        sliceIndexEnd = j; 
        break; 
    }
}

let fav = fruit.slice(sliceIndexStart, sliceIndexEnd);
console.log(fav); 

//Using Split
const fruitArray=fruit.split(' ');
const favArray=fruitArray[2];
console.log(favArray)


/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...

const isOxygen1=funnyHeadline1.toLowerCase().includes('oxygen');
// Check the second headline
// Your code here ...
const isOxygen2=funnyHeadline2.toLowerCase().includes('oxygen')

if (isOxygen1){
console.log('The first headline contains Oxygen');
}
else{
    console.log('The first headline does not contain Oxygen');
}
if (isOxygen2){
    console.log('The second headline contains Oxygen');
    }
    else{
        console.log('The second headline does not contain Oxygen');
    }
/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
console.log(string4.length)

// b) Print the last character in the string
// Your code here ...
console.log(string4[string4.length-1])