var user = {};
user.name = 'john';
user.surname = 'mike';
user.name = 'peter';
delete user.name;

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

let list = Object.getOwnPropertyNames(fruit);
let total = 0;
for (let i = 0; i < list.length; i++)
{
    total += fruit[list[i]];
}
document.write(total);