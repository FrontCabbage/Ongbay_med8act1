var name = prompt("Please enter your full name:");
document.getElementById('fname').innerHTML = name;
var username = prompt("Please enter your username:");
document.getElementById('username').innerHTML = username;
if (confirm("What is your Gender?\nPress OK if you are Male\nCancel if Female")==true){
    document.getElementById('gender').innerHTML = "M";
    alert("Your profile Gender is set to MALE");
}else {
    document.getElementById('gender').innerHTML = "F";
    alert("Your profile Gender is set to FEMALE");
}
var desc = prompt("Please type a brief description of yourself:");
document.getElementById('desc').innerHTML = desc;
var year = parseInt(prompt("Please enter your birth year:"));
document.getElementById('year').innerHTML = year;
var age = 2023 - year;
document.getElementById('age').innerHTML = age;
if (confirm("Do you want to use a custom profile picture?")== true){
    var file = prompt("Please enter the file name of the picture:\n(ex.: pic.png)");
    document.getElementById('ppic').src = file;
}else {
    alert("No image has been set.");
}