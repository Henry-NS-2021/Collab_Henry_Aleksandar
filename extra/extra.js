//EXTRA EXERCISE-1
//solution 1
let a = "Hey there, i am a javascript developer, and i live in vienna"
console.log(
    a.substring(
        a.indexOf("i"),
        a.indexOf("l") + 5
    ) +
    "."
);

//solution 2
let b = "Hey there, i am a javascript developer, and i live in vienna"
console.log(b.substring(11, 38) + ".");

//solution 3
let c = "Hey there, i am a javascript developer, and i live in vienna"
console.log(
    c.substring(
        c.indexOf("i"),
        c.indexOf(", and i live in vienna")
    ) +
    "."
);

//EXTRA EXERCISE-2
let fruits = ["apple", "banana", "kiwi"]
fruits.splice(2, 0, "strawberry", "kiwi");
console.log(fruits);

/* Why doesn't thsi work??:
let fruits = ["apple", "banana", "kiwi"]
console.log(fruits.splice(2, 0, "strawberry", "kiwi"));
*/