

var fs=require('fs');
var json=fs.readFileSync('/home/user/PycharmProjects/Nodejs/Handson/profile.json');
var json1=JSON.parse(json);
console.log(json1);
json1.employee.id="1234567";
console.log(json1);
fs.writeFileSync('/home/user/PycharmProjects/Nodejs/Handson/overrite4.json',JSON.stringify(json1,null,3));




