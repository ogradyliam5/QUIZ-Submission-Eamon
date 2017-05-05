//Eamon, for some reason the quiz part will only work on chrome-based browsers

var firstname = document.getElementById("fname");
var lastname = document.getElementById("sname");
var email = document.getElementById("email");
var password = document.getElementById("pword");

//STORING TO LOCAL STORAGE
function store()
{
localStorage.firstname = firstname.value;
localStorage.lastname = lastname.value;
localStorage.password = password.value;	
localStorage.email = email.value;	
}