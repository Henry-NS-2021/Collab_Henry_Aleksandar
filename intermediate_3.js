var obst = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = obst.split("/");
document.write(temp.slice(0, 1) + "<br>");
document.write(temp.slice(1, 2) + "<br>");
document.write(temp.slice(2, 3) + "<br>");
document.write(temp.slice(3, 4) + "<br>");
document.write(temp.slice(4, 5) + "<br>");
document.write(temp.slice(5, 6) + "<br>");
document.write(temp.slice(6, 7) + "<br>");
document.write(temp.slice(7));

//second solution
var obst = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var x = new Array();
x = obst.split("/");
var x = x.join("<br>");
document.write(x);

//third solution
var obst = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var x = new Array();
x = obst.split("/").join("<br>");
document.write(x);