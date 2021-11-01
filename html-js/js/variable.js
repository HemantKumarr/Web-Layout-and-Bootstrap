// var : function level  scope
// let : block level scope
//const : same but not reassignable

function display()
{
    var flag = true;
    if(flag)
    {
        var i1 = "iphone";
        let i2 = "nike";
        const i3 = "adidas";

        console.log(i1);
        console.log(i2);
        console.log(i3);
    }
}