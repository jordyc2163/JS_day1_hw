//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    for(let i = 0; i < names.length; i++){
        if(string.includes(names[i])){
            console.log(names[i])
        } else{
            console.log("No matches")
        }
    }
}

let findWords2 = function(string, names){
    for(let value of names){
         console.log(string.includes(value) ? value : "No Matches")
    }
}
//Call method here with parameters

console.log(findWords(dog_string, dog_names))
console.log(findWords2(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let replaceEvens = function(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    } return arr
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

console.log(replaceEvens(givenArr))

// CODE WARS REVISITED

// Write a function to split a string and convert it into an array of words.

let convertString = function(string){
    return string.split(' ')
}

console.log(convertString("I love arrays they are my favorite"))

// FIND THE VOWELS
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

let vowelFinder = function(word){
    let vowels = ['a','e','i','o','u']
    let answerList = []
    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i].toLowerCase())){
            answerList.push(i)
        }
    }
    return answerList
}

console.log(vowelFinder("Super"))