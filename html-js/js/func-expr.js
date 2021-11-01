// show();  uncaughtTypeErrror: show is not a function
// showData();
message();
function message()
{
    console.log("welcome");
}
// func-expr: it is used with expression syntax and is not hoisted
var showData = function show(){
    console.log("labeled func expr");
}

var show = function() {
    console.log("anonymous func expr");
}

var showAuthor = function show(name, email){
    console.log(`The name is ${name} and email is ${email}`);
}
show();
showData();
showAuthor();
showAuthor("sdf",768678.78);
// function is hoisted i.e can be used before declaration
// not true for function expresssion