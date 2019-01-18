//PROBLEM1
//Write a JavaScript function that accepts a sentence of words all in lowercase, and returns every other word in all caps. Hint: see toUppercase()
// ex. in a galaxy far far away -> in A galaxy FAR far AWAY

function problem1() {

    // newWord = "blah blah blah blah"
    // newArray should be ["blah", "blah", "blah", "blah"]
    let newWord = prompt("Put a sentence");
    let word = newWord.split(",");



    for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                console.log(word[i].toUpperCase());
            } else {
                console.log("");
            }
    }
    console.log(newWord);

}
problem1();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PROBLEM2
//Write a JavaScript function that accepts a word in all lowercase or in all uppercase, and returns the word in the opposite case.
// Hint: see toLowercase()
//ex. hello -> HELLO or HOWDY -> howdy

var words2 = "WE LOVE CODING";
var res2 = words2.toLowerCase();
console.log(res2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PROBLEM3
//Write a JavaScript function to get the first n element(s) of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
//ex:
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],1));

// var Array = [12,3,45,65,2,3,2];
//
// console.log(Array);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PROBLEM4
//Write a JavaScript function to remove an element with a specific value from an array.
// ex:
// console.log(remove_array_element([2, 5, 9, 6], 5));

var num = 4;
var Array = [12,3,45,65,2,3,2];
console.log(Array);
console.log("We're removing " + num);
console.log(Array.splice(0,num));
console.log(Array.join(", "));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PROBLEM5
//Create a new empty array called pet_list. Add 3 pet objects to the pet_list array (each pet should have a type and a breed property) You can choose the pets.
// Add a new property called age to each pet instance in pet_list
// Assign a number for the age for all of the pets
// Iterate the list of pets and print the properties for each pet

// pet_list = [];



