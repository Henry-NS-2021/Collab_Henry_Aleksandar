//challenge-1
let a = [
    ["Vienna ", "  ", " ", "    ", "    "],
    ["     ", "is ", " ", "    ", "    "],
    ["     ", "  ", "a ", "    ", "    "],
    ["     ", "  ", " ", "nice ", "    "],
    ["     ", "  ", " ", "    ", "city"]
];
console.log(a.join("\t"));
// console.log((a[0] + "\n" + a[1] + "\n" + a[2] + "\n" + a[3] + "\n" + a[4]).join('\t');

//challenge-2
var challengeTWO = `"Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up".`;
console.log(challengeTWO.split("$").join(" "));