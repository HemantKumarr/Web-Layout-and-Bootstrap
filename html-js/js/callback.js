var x = function()
{
    console.log("Called from another function");
    return 1000;
}

var y = function(a)
{
    console.log("Processing function");
    console.log(a);
}
console.log(x);   // x is a function body
var y = x();      // here function x is being called
console.log(y);

// y(100);
y(x);