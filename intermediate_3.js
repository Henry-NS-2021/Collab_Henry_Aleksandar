var obst = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = obst.split("/");
console.log(temp.slice(0, 1));
console.log(temp.slice(1, 2));
console.log(temp.slice(2, 3));
console.log(temp.slice(3, 4));
console.log(temp.slice(4, 5));
console.log(temp.slice(5, 6));
console.log(temp.slice(6, 7));
console.log(temp.slice(7));

//second solution
var obst = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var x = new Array();
x = obst.split("/");
var x = x.join("\n");
console.log(x);