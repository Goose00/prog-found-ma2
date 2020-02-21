//question 1
var petArray = ["cat", "cow", "dog"];

//question 2
//Is this the correct way to do it?
console.log("cow")
//Or this? I can´t remember learning this yet. But from the question this seems more correct.
console.log(petArray[1]);

//question 3
petArray.push("sheep");

//question 4
console.log(petArray.length);

//question 5
var catObject = {
    name: "Garfield", //name is the key, "Garfield" is the value, a string value
    colour: "Orange and stripey", //colour is the key, "Orange and stripey" is the value, a string value
    age: 10, //age is the key, 10 is the value, a number value
}

//question 6
console.log(catObject.age)

//question 7
var catArray = [
{
    name: "Garfield",
    colour: "Orange and stripey",
    age: 10
}
];
//question 8
for(var i = 0; i < catArray.length; i++){
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}

//question 9
function logToConsole(thisIs) {
    console.log(thisIs)
}

//question 10
logToConsole("donkey");
