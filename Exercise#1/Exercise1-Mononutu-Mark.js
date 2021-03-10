/*
    Mononutu, Mark Jibril
    Mobile application Development - A
*/

// Array Exercises

let people  = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people
for (let i=0; i<people.length; i++){
    console.log(people[i]);
}

// 2. Using a ForEach(), iterate through this array and console.log all of the people
people.forEach(function(item){
    console.log(item);
})

// 3. Write the command to remove "Greg" from the array
people.shift();
//console.log(people);

// 4. Write the command to remove "James" from the array
people.pop();
//console.log(people);

// 5. Write the command to add "Matt" to the front of the array
people.unshift("Matt");
//console.log(people);

// 6. Write the command to add your name to the end of the array
people.push("Mark");
//console.log(people);

// 7. Using for-loop, iterate through this array and after console.log-ing "Marry", exit from the loop
for (let i=0; i<people.length; i++){
    if(i>1){
        break;
    }
    console.log(people[i]);
}

// 8. Write the command to make a copy of the array using slice. the copy should NOT include "Mary" or "Matt"
let salinBaru = people.slice(2);
console.log("Hasil:"+salinBaru);

/* 9. Redefine the people variable with the value you started with. Using the splice command, remove 
      "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done
      ["Greg", "Marry", "Elizabeth", "Artie", "James"]
*/
people = ["Greg", "Mary", "Devon", "James"];
//console.log(people);
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat("Bob");
console.log(withBob);


// Object Exercises

let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
}

// 1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go"); //atau-> programming.languages[3] = "Go"
console.log(programming.languages);

// 2. By using the bracket notation, change the difficulty to the value of 7
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3. Using the delete keyword, write the command to remove the jokes key from the programming object
//console.log(programming);
delete programming.jokes;
//console.log(programming);

// 4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object
programming.isFun = true;
console.log(programming);

/* 5. Using a map(), iterate through the languages array and update each element to be "0 - JavaScript, 1 - Python",....,
      where 0 represents the index of the array, and console.log the output.
*/
let languages = programming.languages.map(function(item, index){
    return index + " - " + item;
})
console.log(languages);