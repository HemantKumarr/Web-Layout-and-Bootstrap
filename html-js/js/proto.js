function account(id,name, balance,email)
{
    this.account = account;
    this.balance = balance;
    this.email = email;
    this.name = name;
}
// add prototypes in properties
account.prototype.country = "indian";  //set for all the objects

// add methods in prototype
account.prototype.showBalance = function()
{
    return this.balance;
}

account.prototype.deposit = function(amount)
{
    return this.balance+=amount;
}
var acc1 = new account(101, "John" , 3434.67, "john@gmail.com");
acc1.username = " john@123" // set only for this object

var acc2 = new account(102, "Ali" , 45.67, "ali@gmail.com");

console.log(acc1);
console.log(acc1.country);
console.log(acc1.showBalance());
console.log(acc2.deposit(2000));
console.log(acc2);
acc2.country= "aus";
console.log(acc2.country);