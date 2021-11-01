function user(id,name,age,email)
{
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
}

var user1 = new user(100, " sgf", 56,"df");

console.log(user1);